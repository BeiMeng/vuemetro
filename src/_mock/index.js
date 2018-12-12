import Mock from 'mockjs'

//模拟延时
// Mock.setup({
//   timeout: '350-600'
// })

function getMenus(config) {
  console.log(config)
  return [{
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
      title: '商品管理',
      name:'aaa2',
      icon: 'icon-diamond',
      default:false,
      children: [{
          title: '订单管理',
          name:'demo3',
          icon: 'icon-diamond',
          path: '/demo3/2',
          default:false   //后端子菜单设置了默认项,同时将父菜单也设置为默认项
        },
        {
          title: '地址管理',
          name:'aaa4',
          icon: 'icon-diamond',
          path: '/auth/role',
          default:false,  
        }
      ]
    },
    {
      title: '权限管理',
      name:'aaa5',
      icon: 'icon-diamond',
      default:false,  
      children: [{
          title: '用户管理',
          name:'sys1',
          icon: 'icon-diamond',
          path: '/sys1',
          default:false,  
        },
        {
          title: '角色管理',
          name:'sys2',
          icon: 'icon-diamond',
          path: '/sys2',
          default:false,  
        }
      ]
    },
    {
      title: '测试管理',
      name:'aaa8',
      icon: 'icon-diamond',
      default:true,
      group: true,    //只有顶级菜单项才可以设置分组选项
      children: [{
          title: '日志管理',
          name:'aaa9',
          icon: 'icon-diamond',
          default:true,
          children: [{
              title: '商品管理2',
              name:'aaa10',
              icon: 'icon-diamond',
              default:true,
              children: [{
                  title: '订单管理3',
                  name:'demo2',
                  icon: 'icon-diamond',
                  path: '/demo2',
                  default:true,
                },
                {
                  title: '地址管理3',
                  name:'aaa12',
                  icon: 'icon-diamond',
                  path: '/',
                  default:false,
                }
              ]
            },
            {
              title: '权限管理2',
              name:'aaa13',
              icon: 'icon-diamond',
              default:false,
              children: [{
                  title: '用户管理2',
                  name:'aaa14',
                  icon: 'icon-diamond',
                  default:false,
                },
                {
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
          title: '信息管理',
          name:'demo',
          icon: 'icon-diamond',
          path: '/demo',
          default:false,
        }
      ]
    },
    {
      title: '系统配置',
      name:'aaa17',
      icon: 'icon-diamond',
      default:false,
      group: true,
      children: [{
          title: '商品管理1',
          name:'aaa18',
          icon: 'icon-diamond',
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
          title: '菜单管理',
          name:'menusManage',
          icon: 'icon-diamond',
          path: '/menusManage',
          default:false,
        },
        {
          title: '权限管理2',
          name:'aaa21',
          icon: 'icon-diamond',
          default:false,
          children: [{
              title: '用户管理2',
              name:'aaa22',
              icon: 'icon-diamond',
              path: '/auth/user',
              default:false,
            },
            {
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
