<template>
  <div>
    <van-nav-bar
      title="注册"
    />
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button block type="info" native-type="submit">注册</van-button>
      </div>
    </van-form>
    <router-link to="/login" class="link">已有账号?去登录</router-link>
  </div>
</template>

<script>
import { register } from '@/api/user'

export default {
  name: 'RegisterPage',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async onSubmit (values) {
      this.$toast.loading({
        message: 'loading',
        forbidClick: true
      })
      await register(values)
      this.$toast.success('注册成功')
      await this.$router.push('/login')
    }
  }
}
</script>

<style lang="less" scoped>
.link {
  color: #069;
  font-size: 12px;
  padding-right: 20px;
  float: right;
}
</style>
