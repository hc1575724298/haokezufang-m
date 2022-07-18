<!--
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-15 00:26:00
 * @LastEditors: sj
 * @LastEditTime: 2022-07-17 16:01:57
-->
<template>
  <div class="city">
  <Header title="城市列表" class="cityTitle"></Header>

<van-index-bar :index-list="indexList" highlight-color="#58b67f" class="cityList">
  <van-index-anchor index="#">当前城市</van-index-anchor>
  <van-cell :title="$route.query.cityName" />

  <van-index-anchor index="热门">热门城市</van-index-anchor>
  <van-cell :title='item.label' v-for="(item, index) in hotCityList" :key="index" @click="changeCity(item.label)"/>

  <van-index-anchor :index="item" v-for="item in indexList.slice(2)" :key="item.label">
     <span>  {{item}}</span>
       <div v-if="filterCityList[item]?.length>0">

      <van-cell  :title="city" v-for="(city, index) in filterCityList[item]" :key="index" @click="changeCity(city)"/>
       </div>
      <van-cell title="暂无城市" v-else/>

  </van-index-anchor>
</van-index-bar>

  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import { cityList, hotCity, getCityInfo } from '@/api/area'
// getCityHouseInfo
export default {
  data() {
    return {
      indexList: ['#', '热门', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
      hotCityList: [],
      allCityList: [],
      filterCityList: {}
    }
  },
  components: {
    Header
  },
  created() {
    this.getCity()
    this.hotCity()
  },
  methods: {
    async getCity() {
      try {
        const { data: { body } } = await cityList('1')
        // console.log(body)
        this.allCityList = body

        const obj = {}
        this.indexList.slice(2).forEach(ele => { obj[ele] = [] })

        this.allCityList.forEach(ele => {
          obj[ele.pinyin.substr(0, 1).toUpperCase()].push(ele.label)
        })
        // console.log(obj)
        this.filterCityList = obj
      } catch (e) {
        console.log(e)
      }
    },
    async hotCity() {
      try {
        const res = await hotCity()
        // console.log(res.data.body)
        this.hotCityList = res.data.body
      } catch (e) {
        console.log(e)
      }
    },
    async changeCity(val) {
      try {
        const { data: { body } } = await getCityInfo(val)
        console.log(body)

        // const res = await getCityHouseInfo(body.value)
        // console.log(res)
        this.$router.push({
          path: '/layout/home',
          query: {
            nameCity: body.label
          }
        })
      } catch (error) {
        console.log(error)
      }
    }
  }

}
</script>

<style lang="less" scoped>
 .city {
  .cityTitle {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    z-index: 111;
  }
  .cityList {
    padding-top: 50px;
  /deep/.van-index-bar__sidebar {
    top: 54%;
  }
  /deep/.van-index-bar__index {
        padding: 0 0.21333rem 8px 0.42667rem;
  }
  }

 }
</style>
