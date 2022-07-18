<!--
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-15 14:19:54
 * @LastEditors: sj
 * @LastEditTime: 2022-07-16 14:02:55
-->
<template>
  <div>
<Header title="房屋管理"></Header>

  <!-- 等待加载 -->
    <div class="await" v-if="managementList.length ===0">
      <div class="pic"> <img src="../../assets/not-found.png" alt=""></div>
       <p>您还没有房源, <span>去发布房源</span>吧～</p>
    </div>

<HouseItem v-for="(item, index) in managementList" :key="index" :houseInfo="item" v-else></HouseItem>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import HouseItem from '@/components/HouseItem.vue'
import { managementList } from '@/api/user'
export default {
  data() {
    return {
      managementList: []
    }
  },
  components: {
    Header,
    HouseItem
  },
  created() {
    this.getManagementList()
  },
  methods: {
    async getManagementList() {
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true
      })
      try {
        const res = await managementList(this.$store.state.user.token)
        // console.log(res.data.body)
        this.managementList = res.data.body
      } catch (e) {
        this.$toast.fail('获取数据失败，请稍后重试')
        console.log(e.message)
      }
    }
  }

}
</script>

<style lang="less" scoped>
     .await {
    width: 100%;
    .pic {
      width: 200px;
      margin: 40px auto 30px;
      img {
        width: 100%;
        height: 100px;
      }
    }
    p {
      font-size: 14px;
      text-align: center;
      span {
        color: #58b67f;
      }
    }
   }
</style>
