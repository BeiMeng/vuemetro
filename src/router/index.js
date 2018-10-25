import Vue from 'vue'
import Router from 'vue-router'


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


export default router
