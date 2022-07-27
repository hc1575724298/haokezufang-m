<!--
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-15 19:41:15
 * @LastEditors: sj
 * @LastEditTime: 2022-07-20 15:21:48
-->
<template>
  <div class="MoreHouseMsg">
    <Header :title="houseMsg.community && houseMsg.community"></Header>

    <div class="main">
      <div class="pic">
      <img :src="`http://liufusong.top:8080${houseMsg.houseImg}`">
    </div>

    <div class="houseinfo">
      <h3>{{houseMsg.title}}</h3>
      <div class="tags">
        <span v-for="(item, index) in houseMsg.tags" :key="index">{{item}}</span>
      </div>
      <div class="description">
         <div class="item">
          <div>{{houseMsg.price}}<span>/月</span></div>
          <p>租金</p>
         </div>
          <div class="item">
          <div>{{houseMsg.roomType}}</div>
          <p>房型</p>
         </div>
          <div class="item">
          <div>{{houseMsg.size}}</div>
          <p>面积</p>
         </div>
      </div>
      <div class="moreinfo">
        <div class="info_item">
          <div><span>装修：</span><span>精装</span></div>
          <div><span>楼层：</span><span>{{houseMsg.floor}}</span></div>
        </div>
        <div class="info_item">
          <div><span>朝向:</span><span>{{ houseMsg.oriented&&houseMsg.oriented[0]}}</span></div>
          <div><span>类型:</span><span>普通楼层</span></div>
        </div>
      </div>
    </div>

    <div class="map">
       <div class="title">小区: <span>天山星城</span></div>
       <div class="map-img"></div>
    </div>

    <div class="house_about">
      <div class="title">房屋配套</div>
      <ul>
        <li v-for="(item, index) in houseMsg.supporting" :key="index">
          <span :class="getIcon(item)"></span>
          <p>{{item}}</p>
        </li>
      </ul>
    </div>

   <div class="house-options">
    <div class="title">房源概况</div>
    <div class="house-man">
      <div class="left">
       <div class="pic"> <img src="" alt=""></div>
       <div class="info">
        <div class="name">王女士</div>
        <div class="approve"><van-icon name="flag-o" />已认证房主</div>
       </div>
      </div>

      <div class="right">发消息</div>
    </div>
   </div>
    </div>

   <!-- 底部 -->
   <div class="footer">
     <div class="shouc" @click="shoucangFn">
       <van-icon name="star" class="star" v-if="isFavorite"/>
       <van-icon name="star-o" v-else/>
       收藏
     </div>
     <div class="ontel">在线咨询</div>
     <div class="tel"><a href="tel:400-618-4000" style="color: #fff">电话预约</a></div>
   </div>
  </div>
</template>
<script>
import Header from '@/components/Header.vue'
import { MoreHouseMsg } from '@/api/house'
import { isFavorite, addFavorite, delFavorite } from '@/api/user'
import { getIcon } from '@/utils/myutils'
export default {
  data() {
    return {
      houseMsg: {},
      isFavorite: false
    }
  },
  created() {
    this.getMoreHouseMsg()
    this.Favorite()
    // console.log(this.$route.params.houseCode)
  },
  methods: {
    async getMoreHouseMsg() {
      try {
        // const houseCode = this.$route.params.houseCode
        // console.log(JSON.parse(houseCode) === houseCode)
        // localStorage.setItem('houseCode', JSON.stringify(houseCode) || '')
        const res = await MoreHouseMsg(JSON.parse(localStorage.getItem('houseCode')))
        console.log(res.data.body)
        this.houseMsg = res.data.body
      } catch (e) {
        console.log(e.message)
      }
    },
    async Favorite() {
      try {
        const { data: { body } } = await isFavorite(this.$store.state.user.token, JSON.parse(localStorage.getItem('houseCode')))
        // console.log(body.isFavorite)
        if (body.isFavorite) {
          this.isFavorite = true
        } else {
          this.isFavorite = false
        }
      } catch (e) {
        console.log(e)
      }
    },
    getIcon(val) {
      console.log(val)
      return getIcon(val)
    },
    async shoucangFn() {
      if (this.isFavorite) {
        try {
          const { data } = await delFavorite(JSON.parse(localStorage.getItem('houseCode')))
          console.log(data)
          this.$toast.success('取消收藏')
          this.isFavorite = false
        } catch (error) {
          this.$toast.fail('取消收藏失败')
        }
      } else {
        try {
          const { data } = await addFavorite(JSON.parse(localStorage.getItem('houseCode')))
          console.log(data)
          this.$toast.success('收藏成功')
          this.isFavorite = true
        } catch (error) {
          this.$toast.success('收藏失败')
        }
      }
    }
  },
  components: {
    Header
  }
}
</script>

<style lang="less" scoped>
  .MoreHouseMsg {
    font-size: 14px;
    background-color: #f6f5f6;
    .main {
      padding-bottom: 50px;
        .pic {
      width: 100%;
      height: 252px;
      img {
        width: 100%;
        height: 100%;
      }
    }
   .houseinfo {
    background-color: #fff;
    padding: 15px;
    h3 {
      margin: 10px 0;
    }
    .tags {
      span {
            color: #39becd;
    background: #e1f5f8;
        font-size: 12px;
    border-radius: 3px;
    padding: 4px 5px;
    margin-right: 5px;
        line-height: 12px;
      }
    }
    .description {
      display: flex;
      justify-content: space-around;
      align-items: center;
      border-top: 1px solid #cecece;
    border-bottom: 1px solid #cecece;
    margin: 15px 0;
    padding: 15px 0;
    .item {
text-align: center;
div {
  color: #fa5741;
    font-size: 18px;
    font-weight: bolder;
    span {
      font-weight: 400;
    }
}
p {
  color: #999;
}
    }
    }
    .moreinfo {
      display: flex;
      height: 52px;
      font-size: 13px;
      color: #333;
      .info_item {
        flex: 1;
        div>span:nth-child(1) {
          color: #999;
    padding-right: 5px;
    line-height: 26px;
        }
      }
    }
   }
   .map {
    margin-top: 10px;
    background-color: #fff;
      .title {
        font-size: 14px;
        margin: 0 3%;
        line-height: 44px;
        color: #666;
        span {
          color: #333;
        }
      }
      .map-img {
        height: 145px;
        background-color: #666;
      }
   }
   .house_about {
    background-color: #fff;
    padding: 0 10px;
    margin-bottom: 10px;
      .title {
     font-weight: 600;
    font-size: 15px;
    margin-bottom: 10px;
    padding: 15px 0;
    border-bottom: 1px solid #cecece;
      }
      ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        li {
          text-align: center;

          margin: 10px 0;
          width: 20%;
          line-height: 23px;
          color: #333;
          font-size: 14px;
          p {
            padding: 0;
            margin: 0;
          }
    .van-icon {
      font-size: 23px
    }
        }
      }
   }
   .house-options {
        margin: 10px 0;
    padding: 0 10px;
    line-height: 150%;
    background: #fff;
    .title {
          font-weight: 600;
    font-size: 15px;
    margin-bottom: 10px;
    padding: 15px 0;
    border-bottom: 1px solid #cecece;
    }
    .house-man {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
    display: flex;
    .left {
      display: flex;
 .pic {
        width: 52px;
        height: 52px;
        margin: 10px 10px 0 0;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .info {
            padding: 15px 0 0 5px;
            .name {
              font-size: 14px;
              color: #333;
            }
            .approve {
              font-size: 12px;
    color: #fa5741;
            }
      }
    }
  .right {
    width: 74px;
    height: 29px;
    text-align: center;
    color: #33be85;
    border: 1px solid #33be85;
    border-radius: 3px;
    padding: 3px 15px;
    box-sizing: border-box;
    margin-right: 15px;
  }
    }
   }
    }

   /deep/ .footer {
    margin-top: 50px;
    display: flex;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    line-height: 50px;
    border-top: 1px solid #cecece;
    text-align: center;
    font-size: 17px;
    color: #999;
    background-color: #fff;
    .tel {
      width: 120px;
     border-left: 1px solid #e8e8e9;
    background-color: #21b97a;
    margin-left: 8px;
    color: #fff;
    }
    .ontel {
      width: 120px;
    border-left: 1px solid #e8e8e9;
    margin-left: 8px;
    }
  .shouc {
    width: 120px;
  }
  .star {
    color: #fa5741;
  }
   }

  }
</style>
