<!--
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-17 16:08:17
 * @LastEditors: sj
 * @LastEditTime: 2022-07-18 09:10:08
-->
<template>
  <div>
    <Header title="发布房源"></Header>
    <van-cell title="房源信息" style="color: #58b67f" />
    <van-cell title="小区名称" is-link value="请输入小区名称" />
    <van-field v-model="sms" center clearable placeholder="请输入租金/月">
      <template #label> 租&emsp;&emsp;金 </template>
      <template #button>
        <span>¥/月</span>
      </template>
    </van-field>
    <van-field
      v-model="sms"
      center
      clearable
      label="建筑面积"
      placeholder="请输入建筑面积"
    >
      <template #button>
        <span>m<sup>2</sup></span>
      </template>
    </van-field>
    <van-cell title="户型" is-link value="请选择" @click="showPopup(1)">
      <template #title>户&emsp;&emsp;型</template>
    </van-cell>
    <van-cell title="所在楼层" is-link value="请选择" @click="showPopup(2)"/>
    <van-cell title="朝向" is-link value="请选择" @click="showPopup(3)">
      <template #title>朝&emsp;&emsp;向</template>
    </van-cell>
    <van-cell title="房屋标题" />
    <van-field v-model="sms" clearable placeholder="请输入建筑面积" />
    <van-cell title="房屋图像" />
    <div class="uploader">
      <van-uploader :after-read="afterRead" />
    </div>
    <van-cell title="房屋配置" />
    <div class="options-container">
      <section
        @click="addColor(item)"
        v-for="(item, index) in settingList"
        :key="index"
        :class="['options', item.isActive ? 'color' : '']"
      >
        <van-icon :name="getIcon(item)" />
        <span>{{ item.name }}</span>
      </section>
    </div>
    <van-cell title="房屋描述" />
    <van-field v-model="value" placeholder="请输入房屋描述信息" />

    <div class="button">
      <van-button plain type="primary">取消</van-button>
      <van-button type="primary">提交</van-button>
    </div>

    <!-- 弹出层 -->
    <van-cell is-link @click="showPopup">展示弹出层</van-cell>
    <van-popup v-model="show" position="bottom" :style="{ height: '46%' }">
      <van-picker
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
export default {
  data() {
    return {
      sms: '',
      value: '',
      show: false,
      is: '',
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
      ]
    }
  },
  computed: {
    columns() {
      if (this.is === 1) {
        return ['一室', '二室', '三室']
      } else if (this.is === 2) {
        return ['高', '中', '低']
      } else if (this.is === 3) {
        return ['东', '南', '西', '北']
      } else {
        return []
      }
    }
  },
  components: {
    Header
  },
  methods: {
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file)
    },
    getIcon(val) {
      return getIcon(val)
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
    onConfirm(value, index) {
      this.$toast(`当前值：${value}, 当前索引：${index}`)
    }
  }
}
</script>

<style lang="less" scoped>
.uploader {
  padding: 5px;
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
