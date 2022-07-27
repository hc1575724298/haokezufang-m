<!--
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-13 22:01:47
 * @LastEditors: sj
 * @LastEditTime: 2022-07-20 14:47:59
-->
<template>
  <div class="home">
    <div class="header">
      <!-- 轮播图 -->
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#ccc">
        <van-swipe-item v-for="item in swipeList" :key="item.id">
          <div slot="default">
            <img :src="`http://liufusong.top:8080${item.imgSrc}`" alt="" />
          </div>
        </van-swipe-item>
      </van-swipe>
      <!-- 搜索框 -->
      <div class="search">
        <van-search
          v-model="value"
          placeholder="请输入小区或地址"
          class="search-left"
        >
          <span
            slot="label"
            class="choose-adress"
            @click="toCity"
            ref="cityName"
            >{{ $store.state.cityInfo.label || '北京' }}</span
          >
        </van-search>
        <van-icon name="map-marked" class="search-right" />
      </div>
    </div>
    <ul class="nav">
      <li>
        <div class="pic">
          <img src="../../assets/home1.png" alt="" />
        </div>
        <div class="txt">整租</div>
      </li>
      <li>
        <div class="pic">
          <img src="../../assets/home2.png" alt="" />
        </div>
        <div class="txt">整租</div>
      </li>
      <li>
        <div class="pic">
          <img src="../../assets/home3.png" alt="" />
        </div>
        <div class="txt">整租</div>
      </li>
      <li @click="toAdd">
        <div class="pic">
          <img src="../../assets/home4.png" alt="" />
        </div>
        <div class="txt">去出租</div>
      </li>
    </ul>
    <div class="group">
      <div class="header">
        <h3>租房小组</h3>
        <div class="more">更多</div>
      </div>
      <van-grid
        class="body"
        :column-num="2"
        :gutter="10"
        direction="horizontal"
      >
        <van-grid-item
          :icon="`http://liufusong.top:8080${item.imgSrc}`"
          v-for="item in groups"
          :key="item.id"
        >
          <div slot="text">
            <p van-ellipsis>{{ item.title }}</p>
            <p van-ellipsis>{{ item.desc }}</p>
          </div>
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>

<script>
import { swipe, houseGroups } from '@/api/home'
export default {
  data() {
    return {
      swipeList: [],
      value: '',
      groups: []
    }
  },
  created() {
    this.getSwipeImg()
    this.getGroups()
  },
  methods: {
    async getSwipeImg() {
      try {
        const res = await swipe()
        console.log(res.data.body)
        this.swipeList = res.data.body
      } catch (e) {
        console.log(e)
      }
    },
    async getGroups() {
      try {
        // const res = await houseGroups('AREA|88cff55c-aaa4-e2e0')
        const res = await houseGroups(this.$store.state.cityInfo.value)
        console.log(res.data.body)
        this.groups = res.data.body
      } catch (e) {
        console.log(e)
      }
    },
    toCity() {
      this.$router.push({
        path: '/city',
        query: {
          cityName: this.$refs.cityName.innerHTML
        }
      })
    },
    toAdd() {
      this.$router.push('/addhouse')
    }
  }
}
</script>

<style lang="less" scoped>
.header {
  position: relative;
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    height: 212px;
    text-align: center;
    background-color: #39a9ed;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .search {
    display: flex;
    align-items: center;
    position: absolute;
    left: 0px;
    top: 25px;
    .choose-adress {
      padding-right: 20px;
      border-right: 1px solid #7f7f80;
      margin-right: 8px;
      &::after {
        content: '';
        position: absolute;
        top: 14px;
        left: 50px;
        width: 0px;
        height: 0px;
        border: 4px solid transparent;
        border-top: 6px solid #7f7f80;
        margin: 0 2px;
      }
    }

    .search-left {
      width: 310px;
      height: 34px;
      margin: 0 10px;
      // padding: 5px 5px 5px 8px;
      border-radius: 3px;
      background-color: #fff;
      .van-search__content {
        padding: 0;
        background-color: #fff;
      }
      .van-search__label {
        padding: 0;
      }
    }
    .search-right {
      color: #fff;
    }
  }
}

.nav {
  display: flex;
  justify-content: space-around;
  text-align: center;
  padding: 10px 0;
  height: 122px;
  box-sizing: border-box;
  .pic {
    width: 60px;
    height: 60px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .txt {
    font-size: 14px;
    color: #333;
    margin: 11px 0;
  }
}
.group {
  box-sizing: border-box;
  height: 188px;
  background-color: #f0f0f0;
  padding: 0 10px;
  .header {
    display: flex;
    height: 18px;
    justify-content: space-between;
    padding: 15px 0 15px 10px;
    h3 {
      margin: 0;
      font-size: 15px;
    }
    .more {
      font-size: 14px;
      color: #787d82;
    }
  }
  .body {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    &.van-grid {
      padding-left: 0 !important;
    }
    .van-grid-item {
      width: 172px !important;
      padding-right: 0 !important;
      /deep/ .van-grid-item__content {
        box-sizing: border-box;
        display: flex;
        padding: 0 28px 10px 0 !important;
        // margin-bottom: 10px;
      }
      /deep/ .van-icon {
        width: 50px;
        height: 50px;
        margin: 0 10px;
        .van-icon__image {
          width: 100%;
          height: 100%;
        }
      }
      /deep/ p {
        font-size: 14px;
        color: #333;
        padding: 0;
        margin: 0;
      }
      // &:nth-child(even) {
      //   padding-right: 0 !important;

      // }
    }
  }
}
</style>
