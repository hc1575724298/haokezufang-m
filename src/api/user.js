/*
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-13 20:35:24
 * @LastEditors: sj
 * @LastEditTime: 2022-07-17 14:15:50
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

// 查看已发布房源
/**
 *
 * @param {*} authorization 用户token
 * @returns
 */
export const managementList = (authorization) => {
  return request({
    url: '/user/houses',
    headers: {
      authorization
    }
  })
}

// 查看是否收藏
export const isFavorite = (authorization, id) => {
  return request({
    url: `/user/favorites/${id}`,
    headers: {
      authorization
    }
  })
}
