/*
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-13 18:10:27
 * @LastEditors: sj
 * @LastEditTime: 2022-07-16 11:39:14
 */
import Vue from 'vue'
import Vuex from 'vuex'
import { setToken, getToken, removeToken } from '@/utils'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: getToken() || {}
  },
  getters: {
  },
  mutations: {
    getUser (store, payload) {
      store.user = payload
      setToken(payload)
    },
    removeUser () {
      removeToken()
    }
  },
  actions: {
  },
  modules: {
  }
})
