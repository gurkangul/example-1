import Vue from 'vue'
import Vuex from 'vuex'
import User from './user'
import Localization from './localization'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { User, Localization },
})
