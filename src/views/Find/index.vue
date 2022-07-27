<!--
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-13 23:10:52
 * @LastEditors: sj
 * @LastEditTime: 2022-07-27 09:44:36
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
      <template #label>{{$store.state.cityInfo.label}}<van-icon name="arrow-down"/></template>
    </van-search>

    <!-- tab -->
    <van-tabs
      @click="showPopup"
      v-model="active"
      title-active-color="#58b780"
      :border="true"
      line-width="0"
      :class="{'activ-z': avtiveZ}"
    >
      <van-tab title="区域" :title-class="{color: colorarea}">
        <template #title>
          区域
          <van-icon name="arrow-down" />
        </template>
      </van-tab>
      <van-tab title="方式" :title-class="{color: colortype}">
        <template #title>
          方式
          <van-icon name="arrow-down" />
        </template>
      </van-tab>
      <van-tab title="租金" :title-class="{color: colorprice}">
        <template #title>
          租金
          <van-icon name="arrow-down" />
        </template>
      </van-tab>
      <van-tab title="筛选">
        <template #title>
          筛选
          <van-icon name="arrow-down" />
        </template>
      </van-tab>
    </van-tabs>

    <!-- 无房源 -->
     <van-empty description="暂无房源" v-if="isEmpty"/>

   <!--有 房源渲染 -->
   <HouseItem
   v-else
   v-for="(item, index) in renderCityList"
   :key="index"
   :houseInfo="item"
   ></HouseItem>

  <!-- 弹出层 -->
    <van-popup v-model="show" position="top-center" class="tap-popup">
         <!-- <van-area :area-list="areaList" confirm-button-text=" " cancel-button-text=" ">
         </van-area> -->
         <van-picker
         :columns="columns"
         value-key="label"
         show-toolbar
         toolbar-position="bottom"
         @cancel="onCancel"
         @confirm="onConfirm"
         >

             <!-- 自定义取消按钮 -->
             <template #cancel>
               <van-button
               plain class="leftbtn" type="primary" style="border:0 ; border-top: 1px solid #ccc">取消</van-button>
             </template>
             <!-- 自定义确认按钮 -->
             <template #confirm>
                <van-button class="rightbtn" type="primary" style="">确定</van-button>
             </template>
         </van-picker>
    </van-popup>

     <!-- 筛选 -->
     <FilterHouse ref="filter" :renderInfo="rules" @moreList="onMore"></FilterHouse>
  </div>
</template>

<script>
import FilterHouse from './componemts/FilterHouse.vue'
import { Houserules, forFindHouse } from '@/api/house'
import HouseItem from '@/components/HouseItem.vue'
export default {
  name: 'Find',
  data() {
    return {
      colorarea: false, // 点击确认之后添加颜色
      colortype: false,
      colorprice: false,
      value: '',
      active: 0,
      show: false,
      avtiveZ: false,
      rules: {},
      renderCityList: [],
      isEmpty: false,
      cityId: this.$store.state.cityInfo.value, // 地区的id
      area: '', // 地区
      subway: '', // 地铁
      rentType: '', // 整租
      price: null, // 价格
      roomType: null, // 房屋类型
      more: ''
    }
  },
  computed: {
    columns() {
      if (this.active === 0) {
        return [this.rules.area, this.rules.subway]
      } else if (this.active === 1) {
        return this.rules.rentType
      } else if (this.active === 2) {
        return this.rules.price
      }
      return []
    }
  },
  created() {
    this.Houserules()
    this.forFindHouse()
  },
  components: {
    FilterHouse,
    HouseItem
  },
  methods: {
    showPopup() {
      this.avtiveZ = false
      if (this.active !== 3) {
        this.show = true
      } else {
        this.avtiveZ = true
        this.show = false
        this.$refs.filter.isShow = true
      }
    },
    async Houserules() {
      try {
        const { data: { body } } = await Houserules(this.$store.state.cityInfo.value)
        console.log(body)
        this.rules = body
        this.rules.area.children[0].children = ['不限']
      } catch (error) {
        console.log(error)
      }
    },
    //  根据条件查询房屋
    async forFindHouse() {
      // this.$toast.loading({
      //   message: '加载中...',
      //   forbidClick: true, // 禁止背景点击
      //   duration: 0 // 持续展示
      // })

      try {
        const { data } = await forFindHouse({
          cityId: this.cityId,
          area: this.area,
          subway: this.subway,
          rentType: this.rentType,
          price: this.price,
          more: this.more
        })
        console.log(data)
        this.renderCityList = data.body.list
        if (this.renderCityList.length > 0) { this.isEmpty = false } else { this.isEmpty = true }
      } catch (error) {
        console.log(error)
      }
    },
    // 点击取消按钮时触发
    onCancel(value, icon) {
      this.show = false
    },
    // 点击完成按钮时触发
    onConfirm(value, index) {
      if (this.active === 0) {
        if (value[0] === '区域') {
          const firstArr = this.rules.area.children?.filter(ele => ele.label === value[1])
          const secondArr = firstArr[0].children.filter(ele => ele.label === value[2])
          // console.log(firstArr)
          // console.log(secondArr)
          this.area = secondArr[0].value
          this.forFindHouse({
            cityId: this.cityId,
            area: this.area
          })
        } else if (value[0] === '地铁') {
          const firstSub = this.rules.subway.children?.filter(ele => ele.label === value[1])
          const secondSub = firstSub[0].children.filter(ele => ele.label === value[2])
          this.subway = secondSub[0].value
          this.forFindHouse()
        }
        this.colorarea = true
      } else if (this.active === 1) {
        this.rentType = value.value
        this.forFindHouse()
        this.colortype = true
      } else if (this.active === 2) {
        this.price = value.value
        this.forFindHouse()
        this.colorprice = true
      }

      this.show = false
      console.log(value)
      // console.log(index)
    },
    onMore(val) {
      this.more = val.join(',')
      this.forFindHouse()
    }

  }
}
</script>

<style lang="less" scoped>
/deep/.color {
 color: #58b780;
}
.activ-z {
  z-index: 1 !important;
}
.search {
  color: #fff;
  .van-icon-arrow-left {
    font-size: 23px;
    margin-right: 10px;
  }
  .van-icon-arrow-down {
    font-size: 12px;
  }
  .van-search__label {
    border-right: 1px solid #ccc;
    line-height: 22px;
    margin-right: 10px;
  }
  /deep/ .van-search__content {
    box-sizing: border-box;
    height: 34px;
    padding: 5px 5px 8px;
  }
  .van-cell {
    padding: 0;
  }
}
.van-tabs {
z-index: 2100;
}
.tap-popup{
  top: 98px
}
/deep/.van-popup {
  width: 100%;

  &.van-popup--right {
      z-index: 2111 !important;
      width: 70%;
  }
 .van-button--primary {
  width: 100%;
 }
  .van-picker__cancel {
    // width: 40%;
     flex: 4;
    padding: 0;
    }
    .van-picker__confirm {
flex: 6;
padding: 0;
    }
  }

</style>
