
export default [{ 
    path: '/',
    name: 'helloWorld',   
    component: resolve => {
        require.ensure([],
            () => {
                resolve(require('../view/auth/HelloWorld.vue'))
            })
    },
},{ 
    path: '/demo',
    name: 'demo',
    component: resolve => {
        require.ensure([],
            () => {
                resolve(require('../view/auth/demo.vue'))
            })
    },
},{ 
    path: '/demo2',
    name: 'demo2',
    component: resolve => {
        require.ensure([],
            () => {
                resolve(require('../view/auth/demo2.vue'))
            })
    },
},{ 
    path: '/demo3/:id',
    name: 'demo3',
    component: resolve => {
        require.ensure([],
            () => {
                resolve(require('../view/auth/demo3.vue'))
            })
    },
}]