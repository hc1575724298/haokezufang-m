<!--
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-14 15:53:37
 * @LastEditors: sj
 * @LastEditTime: 2022-07-20 15:35:07
-->
<template>
  <div>
      <!--  头部 -->
    <van-nav-bar
      :title="title"
      left-arrow
      @click-left="clickFn"
      class="title-nav"
    />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '标题'
    }
  },
  methods: {
    clickFn() {
      if (this.title === '发布房源') {
        this.$router.push('/layout/home')
      } else {
        this.$router.back()
      }

      localStorage.removeItem('houseCode')
    }
  }

}
</script>

<style lang="less" scoped>
  .title-nav {
    background-color: #21b97a;
    :deep .van-nav-bar__title {
      color: #fff;
      font-size: 18px;
    }
    :deep .van-icon {
      color: #fff;
    }
  }
</style>
