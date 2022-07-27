<!--
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-13 23:11:12
 * @LastEditors: sj
 * @LastEditTime: 2022-07-25 23:56:41
-->
<template>
  <div>
   <transition name="box2"
   enter-active-class="animated bounceIn"
  leave-active-class="animated bounceOut"
   >
  <div class="box" v-show="flag"></div>
</transition>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
 .box {
  width: 100px;
  height: 100px;
  background-color: red;
 }
 .box2-enter,
.box2-leave-to {
  opacity: 0;
}
.box2-enter-active,
.box2-leave-active {
  transition: opacity 1s;
}
.box2-enter-to,
.box2-leave {
  opacity: 1;
}

</style>
