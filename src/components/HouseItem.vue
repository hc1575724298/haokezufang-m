<!--
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-14 15:13:18
 * @LastEditors: sj
 * @LastEditTime: 2022-07-16 14:21:55
-->
<template>
  <div>
    <van-cell-group class="houseItem" @click="toMoreHouseMsg(houseInfo.houseCode)">
      <van-image
        class="leftImg"
        cover
        width="106"
        height="100%"
        :src="`http://liufusong.top:8080${houseInfo.houseImg}`"
      />
      <van-cell class="houseInfo">
        <div slot="default">
          <h4>{{ houseInfo.title || '' }}</h4>
          <div class="address">{{ houseInfo.desc|| '///' }}</div>
          <div
            class="advantage"
            v-for="(item, index) in houseInfo.tags"
            :key="index"
          >
            {{ item }}
          </div>
          <div class="price">
            <span>{{ houseInfo.price }}</span
            >元/月
          </div>
        </div>
      </van-cell>

    </van-cell-group>
  </div>
</template>

<script>
export default {
  props: {
    houseInfo: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  created() {
    // console.log(this.houseInfo)
  },
  methods: {
    toMoreHouseMsg(houseCode) {
      localStorage.setItem('houseCode', JSON.stringify(houseCode) || '')
      console.log(localStorage.getItem('houseCode'))
      this.$router.push({
        path: '/morehousemsg'
        // name: 'morehousemsg',
        // params: {
        //   houseCode
        // }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.houseItem {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e5e5e5;
  &::after {
    border: 0;
  }
  .leftImg {
    width: 106px;
  }
  .houseInfo {
    flex: 1;
    h4 {
      padding: 0;
      margin: 0;
    }
    .address {
      font-size: 12px;
      color: #afb2b3;
    }
    .advantage {
      padding: 0 5px;
      display: inline-block;
      border-radius: 3px;
      color: #39becd;
      background: #e1f5f8;
      font-size: 12px;
      margin-right: 5px;
    }
    .price {
      color: #fa5741;
      font-size: 12px;
      span {
        margin-right: 5px;
        font-size: 16px;
        font-weight: 700;
      }
    }
  }
}
</style>
