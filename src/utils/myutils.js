/*
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-17 17:37:58
 * @LastEditors: sj
 * @LastEditTime: 2022-07-20 15:06:56
 */
export function getIcon (val) {
  switch (val) {
    case '电视':
      return 'iconfont icon-dianshiji'
    case '沙发':
      return 'iconfont icon-shafa'

    case '衣柜':
      return 'iconfont icon-yigui'
    case '洗衣机':
      return 'iconfont icon-xiyiji'
    case '空调':
      return 'iconfont icon-kongtiao'
    case '天然气':
      return 'iconfont icon-tianranqi'
    case '冰箱':
      return 'iconfont icon-bingxiang'
    case '暖气':
      return 'iconfont icon-nuanqi-'
    case '热水器':
      return 'iconfont icon-reshuiqi'
    case '宽带':
      return 'iconfont icon-kuandai'
    default:
      return 'setting'
  }
}
