<!--
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-13 22:06:52
 * @LastEditors: sj
 * @LastEditTime: 2022-07-14 17:13:52

-->
<template>
  <div>
    <router-view class="main"></router-view>
    <van-tabbar
      v-model="active"
      active-color="#58b67f"
      inactive-color="#888888"
      router
    >
      <van-tabbar-item icon="wap-home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/find">找房</van-tabbar-item>
      <van-tabbar-item icon="newspaper-o" to="/info">资讯</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/my">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    }
  }
}
</script>

<style lang="less" scoped>
.main {
  margin-bottom: 50px;
}
</style>
