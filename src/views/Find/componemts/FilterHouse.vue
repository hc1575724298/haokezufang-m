<!--
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-19 20:25:43
 * @LastEditors: sj
 * @LastEditTime: 2022-07-25 19:50:48
-->
<template>
  <van-popup
    v-model="isShow"
    position="right"
    :style="{ height: '100%' }"
    class="popup"
  >

     <div v-for="(item, index) in titleList" :key="index">
      <div class="title">{{item}}</div>
      <div class="main">
        <span
        v-for="ele in {
          '户型': renderInfo.roomType,
          '朝向': renderInfo.oriented,
          '楼层': renderInfo.floor,
          '房屋亮点': renderInfo.characteristic
        }[item]"
        :key="ele.value"
        :class="{active: currentList.includes(ele.value)}"
        @click="checked(ele.value)"
        >{{ ele.label }}</span>
      </div>
     </div>

    <!-- <div>
      <div class="title">户型</div>
      <div class="main">
        <span
        v-for="item in renderInfo.roomType"
        :key="item.value"
        :class="{active: currentList.includes(item.value)}"
        @click="checked(item.value)"
        >{{ item.label }}</span>
      </div>
    </div>
    <div>
      <div class="title">朝向</div>
      <div class="main">
        <span
        v-for="item in renderInfo.oriented"
        :key="item.value"
         :class="{active: currentList.includes(item.value)}"
        @click="checked(item.value)"
       >{{item.label}}</span>
      </div>
    </div>
    <div>
      <div class="title">楼层</div>
      <div class="main">
        <span v-for="item in renderInfo.floor" :key="item.value" @click="checked(item)">{{ item.label }}</span>
      </div>
    </div> -->
    <!-- <div class="bottom">
      <div class="title">房屋亮点</div>
      <div class="main">
        <span v-for="item in renderInfo.characteristic" :key="item.value"
        :class="{active: currentList.includes(item.value)}"
        @click="checked(item.value)">{{ item.label }}</span>
      </div>
    </div> -->
    <div class="btn">
      <van-button plain type="primary" style="width: 40%; border-color: #ccc"
      @click="currentList=[]"
        >清除</van-button
      >
      <van-button type="primary" style="width: 60%" @click="toMore">确定</van-button>
    </div>
  </van-popup>
</template>

<script>
export default {
  props: {
    renderInfo: {
      type: Object,
      default: () => { return {} }
    }
  },
  data() {
    return {
      isShow: false,
      currentList: [],
      titleList: ['户型', '朝向', '楼层', '房屋亮点']
      // itemList: {
      //   户型: this.renderInfo.roomType,
      //   朝向: this.renderInfo.oriented,
      //   楼层: this.renderInfo.floor,
      //   房屋亮点: this.renderInfo.characteristic
      // }
      // itemList: []
    }
  },
  // mounted() {
  //   this.$nextTick(() => {
  //     this.itemList = [
  //       this.renderInfo.roomType,
  //       this.renderInfo.oriented,
  //       this.renderInfo.floor,
  //       this.renderInfo.characteristic
  //     ]
  //     console.log(this.itemList)
  //   })
  // },
  methods: {
    checked(item) {
      if (this.currentList.includes(item)) {
        const index = this.currentList.indexOf(item)
        this.currentList.splice(index, 1)
      } else {
        this.currentList.push(item)
      }
    },
    toMore() {
      this.$emit('moreList', this.currentList)
      this.isShow = false
    }
  }
}
</script>

<style lang="less" scoped>
.active {
  background-color: #e3f9f0;
  color: #58b67f;
  border: 1px solid #58b67f;
}
.popup {
  padding: 0 15px 50px;
  transform: unset;
  margin-bottom: 50px;
  top:0;
  .title {
    font-size: 15px;
    color: #333;
    margin: 20px 0;
  }

  .main {
    width: 225px;
    margin-left: 40px;
    border-bottom: 1px solid #e5e5e5;
    padding-bottom: 14px;
    span {
      display: inline-block;
      height: 32px;
      width: 70px;
      margin: 0 18px 15px 0;
      border: 1px solid #ddd;
      border-radius: 3px;
      line-height: 32px;
      text-align: center;
      font-size: 12px;
      color: #888;
    }
  }
  .bottom {
    margin-bottom: 55px;
  }
  .btn {
    width: 78%;
    position: fixed;
    right: 0;
    bottom: 0;
  }
}
</style>
