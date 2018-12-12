import Mock from 'mockjs'

//模拟延时
// Mock.setup({
//   timeout: '350-600'
// })

function getMenus(config) {
  console.log(config)
  return [{
      id:1,
      title: '首页',
      name:'helloWorld',     //路由定义的name,缓存路由页面查找使用
      icon: 'icon-diamond',
      path: '/',     //对应路由路径
      showTab:true,   //是否初始化显示到tab页标签上
      default:false, //是否是初始化默认显示页
      notClose:true, //是否在tab页标签上显示可关闭按钮
      isHome:true    //是否首页,不进入header页签  
    },
    {
      id:2,
      title: '商品管理',
      name:'aaa2',
      icon: 'icon-diamond',
      path: null,
      default:false,
      children: [{
          id:21,
          title: '订单管理',
          name:'demo3',
          icon: 'icon-diamond',
          path: '/demo3/2',
          default:false   //后端子菜单设置了默认项,同时将父菜单也设置为默认项
        },
        {
          id:22,
          title: '地址管理',
          name:'aaa4',
          icon: 'icon-diamond',
          path: '/auth/role',
          default:false,  
        }
      ]
    },
    {
      id:3,
      title: '权限管理',
      name:'aaa5',
      icon: 'icon-diamond',
      path: null,
      default:false,  
      children: [{
          id:31,
          title: '用户管理',
          name:'sys1',
          icon: 'icon-diamond',
          path: '/sys1',
          default:false,  
        },
        {
          id:32,          
          title: '角色管理',
          name:'sys2',
          icon: 'icon-diamond',
          path: '/sys2',
          default:false,  
        }
      ]
    },
    {
      id:4,      
      title: '测试管理',
      name:'aaa8',
      icon: 'icon-diamond',
      path: null,
      default:true,
      group: true,    //只有顶级菜单项才可以设置分组选项
      children: [{
          id:41,        
          title: '日志管理',
          name:'aaa9',
          icon: 'icon-diamond',
          path: null,
          default:true,
          children: [{
              id:411,            
              title: '商品管理2',
              name:'aaa10',
              icon: 'icon-diamond',
              path: null,
              default:true,
              children: [{
                  id:4111,
                  title: '订单管理3',
                  name:'demo2',
                  icon: 'icon-diamond',
                  path: '/demo2',
                  default:true,
                },
                {
                  id:4112,
                  title: '地址管理3',
                  name:'aaa12',
                  icon: 'icon-diamond',
                  path: null,
                  path: '/',
                  default:false,
                }
              ]
            },
            {
              id:412,
              title: '权限管理2',
              name:'aaa13',
              icon: 'icon-diamond',
              path: null,
              default:false,
              children: [{
                  id:4121,
                  title: '用户管理2',
                  name:'aaa14',
                  icon: 'icon-diamond',
                  path: '/auth/role',
                  default:false,
                },
                {
                  id:4122,
                  title: '角色管理2',
                  name:'aaa15',
                  icon: 'icon-diamond',
                  path: '/auth/role',
                  default:false,
                }
              ]
            }
          ]
        },
        {
          id:42,
          title: '信息管理',
          name:'demo',
          icon: 'icon-diamond',
          path: '/demo',
          default:false,
        }
      ]
    },
    {
      id:5,
      title: '系统配置',
      name:'aaa17',
      icon: 'icon-diamond',
      path: null,
      default:false,
      group: true,
      children: [{
          id:51,
          title: '商品管理1',
          name:'aaa18',
          icon: 'icon-diamond',
          path: null,
          default:false,
          children: [{
              title: '订单管理1',
              name:'aaa19',
              icon: 'icon-diamond',
              path: '/auth/user',
              default:false,
            },
            {
              title: '地址管理1',
              name:'aaa20',
              icon: 'icon-diamond',
              path: '/auth/role',
              default:false,
            }
          ]
        },
        {
          id:52,
          title: '菜单管理',
          name:'menusManage',
          icon: 'icon-diamond',
          path: '/menusManage',
          default:false,
        },
        {
          id:53,
          title: '权限管理2',
          name:'aaa21',
          icon: 'icon-diamond',
          path: null,
          default:false,
          children: [{
              id:531,
              title: '用户管理2',
              name:'aaa22',
              icon: 'icon-diamond',
              path: '/auth/user',
              default:false,
            },
            {
              id:532,
              title: '角色管理2',
              name:'aaa23',
              icon: 'icon-diamond',
              path: '/auth/role',
              default:false,
            }
          ]
        }
      ]
    }
  ]
}


Mock.mock(/\/auth\/menus/, 'get', getMenus)


export default Mock
