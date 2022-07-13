<!--
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-13 22:06:52
 * @LastEditors: sj
 * @LastEditTime: 2022-07-13 23:41:59
-->
<template>
  <div>
    <router-view></router-view>
    <van-tabbar v-model="active" class="tabbar-foot">
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
.tabbar-foot {
  .van-tabbar-item--active {
    color: rgb(33, 185, 122);
  }
  :deep .van-icon {
    font-size: 28px;
  }
}
</style>
