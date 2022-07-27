<!--
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-17 18:46:21
 * @LastEditors: sj
 * @LastEditTime: 2022-07-18 20:51:01
-->
<template>
  <div>
    <form action="/">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
    <van-cell
      :title="item.communityName"
      v-for="(item, index) in searchApartmentList"
      :key="index"
      @click="getApartmentName(item)"
    />
  </div>
</template>

<script>
import { searchApartment } from '@/api/area'
export default {
  data() {
    return {
      value: '',
      searchApartmentList: []
    }
  },
  methods: {
    async onSearch(val) {
      const {
        data: { body }
      } = await searchApartment(
        this.value,
        JSON.parse(localStorage.getItem('cityInfo')).value
      )
      console.log(body)
      this.searchApartmentList = body
    },
    onCancel() {
      this.$router.push('/addhouse')
    },
    getApartmentName(apartmentInfo) {
      this.$router.push({
        path: '/addhouse',
        query: {
          apartmentInfo
        }
      })
    }
  }
}
</script>

<style></style>
