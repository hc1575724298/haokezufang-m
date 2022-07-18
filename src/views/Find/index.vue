<!--
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-13 23:10:52
 * @LastEditors: sj
 * @LastEditTime: 2022-07-16 21:31:33
-->
<template>
  <div>
    <!-- header -->
    <van-search
    class="search"
      v-model="value"
      show-action
      background="#4fc08d"
      placeholder="请输入搜索关键词"
    >
      <template #left>
        <van-icon name="arrow-left" />
      </template>
      <template #action>
        <van-icon name="map-marked" />
      </template>
      <template #label>上海<van-icon name="arrow-down" /></template>
    </van-search>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ''
    }
  }
}
</script>

<style lang="less" scoped>

.search {
  color: #FFF;
  .van-icon-arrow-left{
   font-size: 23px;
   margin-right: 10px;
  }
  .van-icon-arrow-down {
    font-size: 12px;
  }
  .van-search__label {
    border-right: 1px solid #ccc;
  }
   /deep/ .van-search__content {
    box-sizing: border-box;
      padding: 5px 5px 8px;
    }
}
</style>
