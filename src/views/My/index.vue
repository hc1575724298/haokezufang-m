<!--
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-13 23:16:02
 * @LastEditors: sj
 * @LastEditTime: 2022-07-16 09:07:38

-->
<template>
  <div class="mine">
    <!-- 已登陆 -->
    <div class="top-LoginBox" v-if="token">
      <van-image width="100%" height="100%" :src="`http://liufusong.top:8080${userInfo.avatar}`||bg2Img" class="bg2Img" />
      <div class="LoginBox">
        <div class="userImg">
          <van-image width="100%" height="100%" :src="`http://liufusong.top:8080${userInfo.avatar}` ||userImg" />
        </div>
        <div class="user-name">{{ userInfo.nickname }}</div>
        <van-button class="LoginBtn" @click="clickOut">退出</van-button>
        <div class="user-edit">
          编辑个人资料
          <van-icon name="play" />
        </div>
      </div>
    </div>
    <!-- 未登陆 -->
    <div class="top-toLoginBox" v-else>
      <!-- 背景图 -->
      <van-image width="100%" height="100%" :src="bgImg" />
      <div class="toLoginBox">
        <div class="userImg">
          <van-image width="100%" height="100%" :src="userImg" />
        </div>
        <div class="user-name">游客</div>
        <van-button type="primary" class="toLoginBtn" to="/login"
          >去登陆</van-button
        >
      </div>
    </div>

    <van-grid :border="false" :column-num="3" class="class-list">
      <van-grid-item icon="star-o" text="我的收藏" @click="toFavoritesList" />
      <van-grid-item icon="wap-home-o" text="我的出租" @click="toHouseManagement"/>
      <van-grid-item icon="clock-o" text="看房记录" />
      <van-grid-item icon="idcard" text="成为房主" />
      <van-grid-item icon="contact" text="个人资料" />
      <van-grid-item icon="service-o" text="联系我们" />
    </van-grid>
    <van-image width="345px" height="100%" :src="joinImg" class="joinImg" />
  </div>
</template>

<script>
import bgImg from '../../assets/bg.png'
import joinImg from '../../assets/join.png'
import userImg from '../../assets/avatar.png'
import bg2Img from '../../assets/avatar (1).png'
import { userInfo } from '@/api/user'
export default {
  data() {
    return {
      bgImg,
      joinImg,
      userImg,
      bg2Img,
      token: '',
      userInfo: {}
    }
  },
  created() {
    this.getUserInfo()
    console.log(this.$store)
  },
  methods: {
    async getUserInfo() {
      try {
        // this.token = JSON.parse(localStorage.getItem('token')).token
        this.token = this.$store.state.user.token
        const res = await userInfo(this.token)
        console.log(res)
        this.userInfo = res.data.body
      } catch (e) {
        console.log(e)
      }
    },
    clickOut() {
      this.$store.commit('removeUser')
      this.token = ''
    },
    toLogin() {
      if (this.token === '') {
        return this.$router.push({
          path: '/login'
        })
      }
    },
    toFavoritesList() {
      // this.toLogin()
      if (this.token === '') {
        return this.$router.push({
          path: '/login'
        })
      }
      this.$router.push({
        path: '/collect'
      })
    },
    toHouseManagement() {
      if (this.token === '') {
        return this.$router.push({
          path: '/login'
        })
      }
      this.$router.push({
        path: '/management'
      })
    }
  }
}
</script>

<style lang="less" scoped>
.mine {
  .top-toLoginBox {
    position: relative;
    min-height: 300px;
    margin-bottom: 25px;
    .toLoginBox {
      position: absolute;
      text-align: center;
      top: 132px;
      left: 25px;
      width: 85%;
      height: 165px;
      background-color: #fff;
      box-shadow: 1px 1px 10px 1px rgb(0 0 0 / 30%);
      font-size: 13px;
      .userImg {
        position: absolute;
        transform: translate(150%, -50%);
        width: 70px;
        height: 70px;
        border-radius: 50%;
        border: 5px solid #f5f5f5;
        box-shadow: 0 2px 2px #bdbdbd;
      }
      .toLoginBtn {
        height: 30px;
        border-radius: 5px;
        background-color: #21b97a;
        font-size: 13px;
      }
      .user-name {
        margin-bottom: 15px;
        margin-top: 60px;
      }
    }
  }
  .top-LoginBox {
    position: relative;
    min-height: 300px;
    margin-bottom: 25px;
    .LoginBox {
      position: absolute;
      top: 167px;
      left: 28px;
      width: 85%;
      height: 210px;
      box-shadow: 0 0 10px 3px #ddd;
      background-color: #fff;
      font-size: 13px;
      text-align: center;
      .userImg {
        overflow: hidden;
        position: absolute;
        transform: translate(150%, -50%);
        width: 70px;
        height: 70px;
        border-radius: 50%;
        border: 5px solid #f5f5f5;
        box-shadow: 0 2px 2px #bdbdbd;
      }
      .LoginBtn {
        width: 58px;
        height: 22px;
        font-size: 11px;
        border-radius: 10px;
        background-color: #21b97a;
        color: #fff;
      }
      .user-name {
        margin-bottom: 8px;
        margin-top: 60px;
      }
      .user-edit {
        color: #999;
        font-size: 12px;
        margin-top: 20px;
      }
    }
  }
  .class-list {
    /deep/.van-icon {
      font-size: 20px;
      margin-bottom: 10px;
    }
    /deep/ .van-grid-item__text {
      font-size: 13px;
      color: #666;
      margin: 0;
    }
  }
  .joinImg {
    padding: 0 15px;
    margin-top: 15px;
  }
}
</style>
