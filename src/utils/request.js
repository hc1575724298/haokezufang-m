/*
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-13 19:23:41
 * @LastEditors: sj
 * @LastEditTime: 2022-07-13 19:27:56
 */
import axios from 'axios'

const request = axios.create({
  baseURL: 'http://liufusong.top:8080',
  timeout: 3000
})

export default request
