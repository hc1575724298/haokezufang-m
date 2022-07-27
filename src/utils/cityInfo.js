/*
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-20 13:58:29
 * @LastEditors: sj
 * @LastEditTime: 2022-07-20 14:39:08
 */
import storage from './storage'
export const setCityInfo = (city) => storage.set('cityInfo', city)
export const getCityInfo = () => storage.get('cityInfo')
export const removeCityInfo = () => storage.remove('cityInfo')
