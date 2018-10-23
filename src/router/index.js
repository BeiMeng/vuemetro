import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import auth from '../router/auth'
import sys from '../router/sys'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'demo',
    //   component: resolve => {
    //       require.ensure([],
    //           () => {
    //               resolve(require('../view/auth/demo.vue'))
    //           })
    //   }
    // },     
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
