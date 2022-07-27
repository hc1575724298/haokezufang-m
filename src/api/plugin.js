/*
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-20 01:25:36
 * @LastEditors: sj
 * @LastEditTime: 2022-07-20 12:43:08
 */
import request from '@/utils/request'

const formData = new FormData()
export const plugin = (file) => {
  formData.append('file', file)

  return request({
    method: 'POST',
    url: '/houses/image',
    data: formData
  })
}
