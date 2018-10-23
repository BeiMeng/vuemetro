import Vue from 'vue'
import Vuex from 'vuex'

import tabView from './modules/tagsView'
import sideBar from './modules/sideBar'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    sideBar,
    tabView
  },

})

export default store
