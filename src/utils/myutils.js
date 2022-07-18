/*
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-17 17:37:58
 * @LastEditors: sj
 * @LastEditTime: 2022-07-17 17:51:38
 */
export function getIcon (val) {
  switch (val) {
    case '电视':
      return 'tv-o'
    case '沙发':
      return 'cart'

    default:
      return 'setting'
  }
}
