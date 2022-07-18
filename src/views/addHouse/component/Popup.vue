<!--
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-17 18:46:21
 * @LastEditors: sj
 * @LastEditTime: 2022-07-17 18:46:21
-->
<template>
  <div>
    <!-- 弹出层 -->
    <van-cell is-link @click="showPopup">展示弹出层</van-cell>
    <van-popup v-model="show" position="bottom" :style="{ height: '30%' }"
      >内容</van-popup
    >
  </div>
</template>

<script>
export default {}
</script>

<style></style>
