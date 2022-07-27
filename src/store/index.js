/*
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-13 18:10:27
 * @LastEditors: sj
 * @LastEditTime: 2022-07-20 14:36:47
 */
import Vue from 'vue'
import Vuex from 'vuex'
import { setToken, getToken, removeToken, setCityInfo, getCityInfo, removeCityInfo } from '@/utils'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: getToken() || {},
    cityInfo: getCityInfo() || {
      label: '北京',
      value: 'AREA|88cff55c-aaa4-e2e0'
    }
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
    },
    getCity (store, payload) {
      store.cityInfo = payload
      setCityInfo(payload)
    },
    removeCity () {
      removeCityInfo()
    }
  },
  actions: {
  },
  modules: {
  }
})
