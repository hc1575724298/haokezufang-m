/*
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-13 20:35:24
 * @LastEditors: sj
 * @LastEditTime: 2022-07-13 21:13:18
 */
import request from '@/utils/request'

export const login = (username, password) => {
  return request({
    url: '/user/login',
    method: 'POST',
    data: {
      username,
      password
    }
  })
}
