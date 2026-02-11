<template>
  <div>
    <van-nav-bar
      title="登录"
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
        <van-button block type="info" native-type="submit">loading</van-button>
      </div>
    </van-form>
    <router-link to="/register" class="link"> 去注册</router-link>
  </div>

</template>

<script>
import { login } from '@/api/user'
import { setToken } from '@/utils/storage'

export default {
  name: 'LoginPage',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async onSubmit (values) {
      const { data } = await login(values)
      this.$toast.success({
        message: '登陆成功',
        duration: 500
      })
      setToken(data.token)
      await this.$router.push('/article')
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
