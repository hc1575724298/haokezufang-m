/*
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-15 19:47:08
 * @LastEditors: sj
 * @LastEditTime: 2022-07-15 21:14:56
 */
import request from '@/utils/request'

// 查询房屋具体信息
export const MoreHouseMsg = (id) => {
  return request({
    url: `/houses/${id}`
    // params: {
    //   id
    // }
  })
}
