<!--
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-14 15:19:00
 * @LastEditors: sj
 * @LastEditTime: 2022-07-14 16:53:50
-->
<template>
  <div>
    <Header title="收藏列表"></Header>
    <HouseItem v-for="(item, index) in houseInfoList" :key="index" :houseInfo="item"></HouseItem>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import HouseItem from '@/components/HouseItem.vue'
import { favoritesList } from '@/api/user'
export default {
  data() {
    return {
      houseInfoList: []
    }
  },
  components: {
    HouseItem,
    Header
  },
  created() {
    this.getFavoritesList()
  },
  methods: {
    async getFavoritesList() {
      try {
        const res = await favoritesList(
          JSON.parse(localStorage.getItem('user')).token
        )
        console.log(res.data.body)
        this.houseInfoList = res.data.body
        console.log(this.houseInfoList)
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style></style>
