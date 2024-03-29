/*
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-15 15:26:40
 * @LastEditors: sj
 * @LastEditTime: 2022-07-15 15:35:05
 */
class Storage {
  set (key, value) {
    if (typeof value === 'object') {
      value = JSON.stringify(value)
    }
    localStorage.setItem(key, value)
  }

  get (key) {
    const value = localStorage.getItem(key)
    try {
      return JSON.parse(value)
    } catch {
      return value
    }
  }

  remove (key) {
    localStorage.removeItem(key)
  }
}

const storage = new Storage()
export default storage
