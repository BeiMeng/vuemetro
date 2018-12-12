// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

//引入vue
import Vue from 'vue'

//引入ElementUI组件库及其相关样式
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


import TokenAuth from './utils/TokenAuth'
//window.tokenAuth=new TokenAuth('LocalStorageStore')
window.tokenAuth=new TokenAuth('Cookie')

import HttpClient from './utils/HttpClient'
window.httpClient=HttpClient

//引入全局自定义样式
import './style/index.css'

//引入模拟数据
import './_mock/index'

//引入入口vue文件
import App from './App'
//引入路由文件
import router from './router'
//引入状态库文件
import store from './store/index'

import './components/index'

import './directives/dialogDrag'

import './auth'

//设置ElementUI 组件库 组件大小，以及模拟弹窗的zIndex 值
Vue.use(ElementUI, { size: 'small', zIndex: 100000 });






Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
