<!--
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-13 22:06:52
 * @LastEditors: sj
 * @LastEditTime: 2022-07-15 17:47:03

-->
<template>
  <div>
    <router-view class="main"></router-view>
    <van-tabbar
      active-color="#58b67f"
      inactive-color="#888888"
      route
    >
      <van-tabbar-item icon="wap-home-o" to="/layout/home">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/layout/find">找房</van-tabbar-item>
      <van-tabbar-item icon="newspaper-o" to="/layout/info">资讯</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/layout/my">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style lang="less" scoped>
// .main {
//   margin-bottom: 50px;
// }
</style>
