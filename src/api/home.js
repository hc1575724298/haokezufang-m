/*
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-14 17:24:22
 * @LastEditors: sj
 * @LastEditTime: 2022-07-14 23:01:41
 */
import request from '@/utils/request'

// 轮播图
export const swipe = () => {
  return request({
    url: '/home/swiper'
  })
}
// 租房小组
export const houseGroups = (area) => {
  return request({
    url: '/home/groups',
    params: {
      area
    }
  })
}
