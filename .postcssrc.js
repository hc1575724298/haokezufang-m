/*
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-13 19:22:13
 * @LastEditors: sj
 * @LastEditTime: 2022-07-13 20:05:47
 */
module.exports = {
  plugins: {
    autoprefixer: {
      browsers: ['Android >= 4.0', 'iOS >= 8']
    },
    'postcss-pxtorem': {
      rootValue: 37.5,
      // rootValue: (module) => (/vant/gi.test(module.file) ? 37.5 : 75),
      propList: ['*']
    }
  }
}
