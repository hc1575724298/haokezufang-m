/*
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-15 00:15:47
 * @LastEditors: sj
 * @LastEditTime: 2022-07-20 13:30:39
 */
import request from '@/utils/request'

// 获取城市列表
export const cityList = (level) => {
  return request({
    url: '/area/city',
    params: {
      level
    }
  })
}

// 获取城市列表
export const hotCity = () => {
  return request({
    url: '/area/hot'
  })
}

// /area/info根据城市名称查询该城市信息
export const getCityInfo = (name) => {
  return request({
    url: '/area/info',
    params: {
      name
    }
  })
}

// /area/map 查询房源数据
export const getCityHouseInfo = (id) => {
  return request({
    url: '/area/map',
    params: {
      id
    }
  })
}

// /area/community
export const searchApartment = (name, id) => {
  return request({
    url: '/area/community',
    params: {
      name,
      id
    }
  })
}

//  /area获取子级城市列表

export const getSmallCity = (id) => {
  return request({
    url: '/area',
    params: {
      id
    }
  })
}
