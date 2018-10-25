import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index'
//引入nprogress
import NProgress from 'nprogress'
import 'nprogress/nprogress.css' //这个样式必须引入


import auth from '../router/auth'
import sys from '../router/sys'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: resolve => {
          require.ensure([],
              () => {
                  resolve(require('../view/passport/login.vue'))
              })
      }
    },     
    {
      path: '/',
      //name: 'pageLayout',
      component: resolve => {
          require.ensure([],
              () => {
                  resolve(require('../view/layout/index.vue'))
              })
      },
      children:auth.concat(sys)
    }
  ]
})



//登陆认证逻辑
router.beforeEach((to, from, next) => {
  NProgress.start();
  let token=tokenAuth.getToken();
  console.log(token);
  if (token == null) {
    if(to.path=="/login"){
      next()
    }else{
      next(`/login?redirect=${to.path}`) // 否则全部重定向到登录页
      NProgress.done()
    }
  }else{
    store.dispatch('getSideBarMenu', token).then(() => {
      // 从this.$store.state.sideBar.sideBarMenu 找到首页 和默认展示页
      if(to.path=='/sys1'){
        next(`/login?redirect=${to.path}`)
        NProgress.done()
      }else{
        next()
      }          
      }).catch(() => {})    
  }
  
})

router.afterEach(() => {
  NProgress.done()
})

export default router
