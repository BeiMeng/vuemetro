
class Config {
    constructor() {
        this.isDebug = process && process.isDebug
        this.apiHost = this.isDebug ? '//localhost:16240' : ''
        this.apiHostName = this.apiHost.replace('//', '') 

        this.showHeaderMenus=true     //是否有顶部菜单
        this.showThemeSetting=true    //是否显示主题设置
        this.showNotifications=true    //是否显示通知
        this.showMessages=true        //是否显示消息
        this.showTasks=true           //是否显示任务
        this.showQuickSideBar=true    //是否显示快速侧边栏
        this.showQuickNav=true        //是否显示快速导航

        this.showBreadcrumb=true      //是否显示页面面包屑导航
        this.showPageTab = true       //是否显示tab页标签

        this.showFooter=true          //是否显示页脚

        this.maxTabCount=15          //允许最多打开多少tab页面
    }
}

export default new Config()