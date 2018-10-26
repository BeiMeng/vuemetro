
export default [
//         {
//     path: '/login',
//     name: 'login',
//     component: resolve => {
//         require.ensure([],
//             () => {
//                 resolve(require('../view/passport/login.vue'))
//             })
//     }
//   },
  { 
    path: '/',
    name: 'helloWorld',   
    component: resolve => {
        require.ensure([],
            () => {
                resolve(require('../view/demo/HelloWorld.vue'))
            })
    },
},{ 
    path: '/demo',
    name: 'demo',
    component: resolve => {
        require.ensure([],
            () => {
                resolve(require('../view/demo/demo.vue'))
            })
    },
},{ 
    path: '/demo2',
    name: 'demo2',
    component: resolve => {
        require.ensure([],
            () => {
                resolve(require('../view/demo/demo2.vue'))
            })
    },
},{ 
    path: '/demo3/:id',
    name: 'demo3',
    component: resolve => {
        require.ensure([],
            () => {
                resolve(require('../view/demo/demo3.vue'))
            })
    },
}]