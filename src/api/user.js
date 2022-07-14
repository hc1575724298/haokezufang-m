/*
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-13 20:35:24
 * @LastEditors: sj
 * @LastEditTime: 2022-07-14 15:02:24
 */
import request from '@/utils/request'

// 用户登陆接口
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

// 获取用户信息
export const userInfo = (authorization) => {
  return request({
    url: '/user',
    headers: {
      authorization
    }
  })
}

// 查看收藏列表
export const favoritesList = (authorization) => {
  return request({
    url: '/user/favorites',
    headers: {
      authorization
    }
  })
}
