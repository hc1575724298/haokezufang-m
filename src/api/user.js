/*
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-13 20:35:24
 * @LastEditors: sj
 * @LastEditTime: 2022-07-20 02:33:52
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
export const userInfo = () => {
  return request({
    url: '/user'
  })
}

// 查看收藏列表
export const favoritesList = () => {
  return request({
    url: '/user/favorites'
  })
}

// 查看已发布房源
/**
 *
 * @param {*} authorization 用户token
 * @returns
 */
export const managementList = () => {
  return request({
    url: '/user/houses'
  })
}

// 查看是否收藏
export const isFavorite = (id) => {
  return request({
    url: `/user/favorites/${id}`
  })
}

// /user/favorites/{id}添加收藏
export const addFavorite = (id) => {
  return request({
    url: `/user/favorites/${id}`,
    method: 'POST'
  })
}

// /user/favorites/{id}删除收藏
export const delFavorite = (id) => {
  return request({
    url: `/user/favorites/${id}`,
    method: 'DELETE'
  })
}

// /user/houses发布房源

export const publishHouseInfo = (data) => {
  return request({
    url: '/user/houses',
    method: 'POST',
    data
  })
}
