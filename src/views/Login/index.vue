<!--
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-13 19:45:13
 * @LastEditors: sj
 * @LastEditTime: 2022-07-15 15:40:34
-->
<template>
  <div class="login">
    <!--  头部 -->
    <Header title="账号登陆"></Header>
    <!-- 表单 -->
    <van-form @submit="onSubmit" class="form">
      <van-field
        class="input-item"
        v-model.trim="username"
        name="username"
        placeholder="请输入账号"
      />
      <van-field
        class="input-item"
        v-model.trim="password"
        type="password"
        name="password"
        placeholder="请输入密码"
      />
      <div style="margin: 16px">
        <van-button block class="sub-btn">登 陆</van-button>
      </div>
    </van-form>
    <div class="toRegister" @click="$router.push('/register')">
      还没有账号，去注册～
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import { login } from '@/api/user'
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async onSubmit() {
      if (this.username === '' || this.password === '') {
        return this.$toast('用户名和密码不能为空')
      }
      if (!/^[a-zA-Z0-9]{5,12}$/.test(this.password)) {
        return this.$toast('用户名格式5-12位的字母和数字')
      }
      if (!/^[a-zA-Z0-9]{5,8}$/.test(this.username)) {
        return this.$toast('用户名格式5-8位的字母和数字')
      }
      try {
        const res = await login(this.username, this.password)
        console.log(res.data)
        this.$store.commit('getUser', res.data.body)
        // localStorage.setItem('user', JSON.stringify(res.data.body))
        this.$toast.success({
          message: '登陆成功',
          onClose: () => {
            this.$router.push({
              path: '/layout/my'
            })
          }
        })
      } catch (err) {
        console.log(err)
        this.$toast.fail('登陆失败')
      }
    }
  },
  components: {
    Header
  }
}
</script>

<style lang="less" scoped>
.login {
  .title-nav {
    background-color: #21b97a;
    margin-bottom: 20px;
    :deep .van-nav-bar__title {
      color: #fff;
      font-size: 18px;
    }
    :deep .van-icon {
      color: #fff;
    }
  }

  .form {
    .input-item {
      padding: 0 16px;
      margin-bottom: 5px;
      :deep .van-field__control {
        height: 60px;
        line-height: 60px;
        font-size: 17px;
        padding: 2px 0;
      }
    }

    :deep .sub-btn {
      height: 50px;
      background-color: #1cb676;
      border: 1px solid #1cb676;
      color: #fff;
      margin-top: 25px;
      font-size: 18px;
    }
  }
  .toRegister {
    margin: 0 auto;
    padding-top: 15px;
    width: 150px;
    font-size: 14px;
    color: #666;
  }
}
</style>
