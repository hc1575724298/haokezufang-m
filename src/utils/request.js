/*
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-13 19:23:41
 * @LastEditors: sj
 * @LastEditTime: 2022-07-25 14:50:19
 */
import axios from 'axios'
import store from '@/store'

const request = axios.create({
  baseURL: 'http://liufusong.top:8080'
})

// 请求拦截器 ： 每次请求前都会执行的函数

request.interceptors.request.use(
  (config) => {
    const token = store.state.user.token
    config.headers.authorization = token
    // config 本次请求的配置， 必须返回出去
    return config
  },
  // 请求错误是处理的方法
  (error) => {
    return Promise.reject(error)
  }
)
export default request
