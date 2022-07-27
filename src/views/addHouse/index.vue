<!--
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-17 16:08:17
 * @LastEditors: sj
 * @LastEditTime: 2022-07-20 15:36:06
-->
<template>
  <div>
    <Header title="发布房源"></Header>
    <van-cell title="房源信息" style="color: #58b67f" />

    <van-cell
      class="van-ellipsis"
      title="小区名称"
      is-link
      :value="$route.query.apartmentInfo?.communityName || '请输入小区名称'"
      @click="$router.push('/apartmentname')"
    />
    <van-field v-model="price" center clearable placeholder="请输入租金/月">
      <template #label> 租&emsp;&emsp;金 </template>
      <template #button>
        <span>¥/月</span>
      </template>
    </van-field>
    <van-field
      v-model="size"
      center
      clearable
      label="建筑面积"
      placeholder="请输入建筑面积"
    >
      <template #button>
        <span>m<sup>2</sup></span>
      </template>
    </van-field>
    <van-cell title="户型" is-link :value="choose1" @click="showPopup(1)">
      <template #title>户&emsp;&emsp;型</template>
    </van-cell>
    <van-cell title="所在楼层" is-link :value="choose2" @click="showPopup(2)" />
    <van-cell title="朝向" is-link :value="choose3" @click="showPopup(3)">
      <template #title>朝&emsp;&emsp;向</template>
    </van-cell>
    <van-cell title="房屋标题" />
    <van-field v-model="title" clearable placeholder="请输入房屋标题" />
    <van-cell title="房屋图像" />
    <div class="uploader">
      <van-uploader v-model="houseImg" multiple :after-read="afterRead"/>
    </div>
    <van-cell title="房屋配置" />
    <div class="options-container">
      <section
        @click="addColor(item)"
        v-for="(item, index) in settingList"
        :key="index"
        :class="['options', item.isActive ? 'color' : '']"
      >
        <span :class="getIcon(item)"></span>
        <span>{{ item.name }}</span>
      </section>
    </div>
    <van-cell title="房屋描述" />
    <van-field
      v-model="description"
      placeholder="请输入房屋描述信息"
      class="houseDesMsg"
    />

    <div class="button">
      <van-button plain type="primary" @click="clickOff">取消</van-button>
      <van-button type="primary" @click="onSubmit">提交</van-button>
    </div>
    <!-- 弹出层 -->
    <van-cell is-link @click="showPopup">展示弹出层</van-cell>
    <van-popup v-model="show" position="bottom" :style="{ height: '46%' }">
      <van-picker
        value-key="label"
        show-toolbar
        :columns="columns"
        @confirm="onConfirm"
        @cancel="onCancel"
      />
    </van-popup>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import { getIcon } from '@/utils/myutils'
import { publishHouseInfo } from '@/api/user'
import { HouseChoose } from '@/api/house'
import { plugin } from '@/api/plugin'
export default {
  data() {
    return {
      title: '',
      description: '',
      price: '',
      size: '',
      show: false,
      is: '',
      houseImg: [],
      settingList: [
        {
          name: '衣柜',
          isActive: false
        },
        {
          name: '洗衣机',
          isActive: false
        },
        {
          name: '空调',
          isActive: false
        },
        {
          name: '天然气',
          isActive: false
        },
        {
          name: '冰箱',
          isActive: false
        },
        {
          name: '暖气',
          isActive: false
        },
        {
          name: '电视',
          isActive: false
        },
        {
          name: '热水器',
          isActive: false
        },
        {
          name: '宽带',
          isActive: false
        },
        {
          name: '沙发',
          isActive: false
        }
      ],
      imgs: [],
      choose1: '请选择',
      choose2: '请选择',
      choose3: '请选择',
      floor: [],
      oriented: [],
      roomType: [],
      supporting: [],
      getFloor: '',
      getRoomType: '',
      getOriented: ''
    }
  },
  computed: {
    columns() {
      if (this.is === 1) {
        return this.roomType
      } else if (this.is === 2) {
        return this.floor
      } else if (this.is === 3) {
        return this.oriented
      } else {
        return []
      }
    }
  },
  created() {
    this.HouseChoose()
  },
  components: {
    Header
  },
  methods: {
    async afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file)
      try {
        const res = await plugin(file.file)
        console.log(res)
        this.imgs = res.data.body
      } catch (error) {
        console.log(error)
      }
    },
    getIcon(val) {
      return getIcon(val.name)
    },
    addColor(item) {
      // console.log(item)
      item.isActive = !item.isActive
    },
    showPopup(val) {
      this.show = true
      this.is = val
    },
    onCancel() {
      this.$toast('取消')
      this.show = false
    },
    onConfirm(value) {
      if (this.columns[0].label === '三室') {
        this.choose1 = value.label
        this.getRoomType = value.value
      } else if (this.columns[0].label === '高楼层') {
        this.choose2 = value.label
        this.getFloor = value.value
      } else if (this.columns[0].label === '东') {
        this.choose3 = value.label
        this.getOriented = value.value
      }
      this.show = false
    },
    clickOff() {
      this.$dialog
        .confirm({
          title: '提示',
          message: '放弃发布房源？',
          confirmButtonText: '继续编辑',
          cancelButtonText: '放弃'
        })
        .then(() => {
          // on confirm
        })
        .catch(() => {
          // on cancel
          this.$router.push('/layout/home')
        })
    },
    async onSubmit() {
      // if (this.houseImg.length === 0) {
      //   return this.$toast('请上传图片')
      // }

      try {
        // 处理房屋配置
        const list = []
        const supprtList = this.settingList.filter(ele => ele.isActive === true)
        supprtList.forEach(ele => list.push(ele.name))
        // console.log(list)
        // 处理图片
        const res = {

          title: this.title,
          description: this.description,
          houseImg: this.imgs.join('|'),
          oriented: this.getOriented,
          supporting: list.join('|'),
          price: this.price,
          roomType: this.getRoomType,
          size: this.size,
          floor: this.getFloor,
          communityName: this.$route.query.apartmentInfo.community

        }
        console.log(res)
        const { data } = await publishHouseInfo(res)

        console.log(data)

        this.$dialog.confirm({
          title: '提示',
          message: '发布房源成功',
          confirmButtonText: '继续发布',
          confirmButtonColor: 'blue',
          cancelButtonText: '去查看'
        })
          .then(() => {
            // on confirm
            this.title = ''
            this.description = ''
            this.price = ''
            this.size = ''
            this.houseImg = ''
            this.choose1 = '请选择'
            this.choose2 = '请选择'
            this.choose3 = '请选择'
          })
          .catch(() => {
            // on cancel
            this.$router.push('/layout/find')
          })
      } catch (error) {
        this.$toast('发布失败')
        console.log(error)
      }
    },
    async HouseChoose() {
      try {
        const { data } = await HouseChoose()
        console.log(data)
        this.floor = data.body.floor
        this.oriented = data.body.oriented
        this.roomType = data.body.roomType
        this.supporting = data.body.supporting
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.uploader {
  padding: 5px;
}
.houseDesMsg {
  height: 150px;
}
.options-container {
  display: flex;
  flex-wrap: wrap;
  padding: 8px 0;
  .color {
    color: red;
  }
  .options {
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    margin-bottom: 5px;
    .van-icon {
      font-size: 18px;
    }
  }
}
.button {
  z-index: 111;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  .van-button {
    width: 50%;
    border: 0;
  }
}
</style>
