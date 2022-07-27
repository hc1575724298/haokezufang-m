/*
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-15 19:47:08
 * @LastEditors: sj
 * @LastEditTime: 2022-07-26 17:42:24
 */
import request from '@/utils/request'

// 查询房屋具体信息
export const MoreHouseMsg = (id) => {
  return request({
    url: `/houses/${id}`
  })
}

// /houses/params  发布房屋所需的条件

export const HouseChoose = () => request({
  url: '/houses/params'
})

// /houses/condition 获取房屋查询条件
export const Houserules = (id) => request({
  url: '/houses/condition',
  params: {
    id
  }
})

// /houses 根据条件查询房屋
export const forFindHouse = (data) => request({
  url: '/houses',
  params: data

})
