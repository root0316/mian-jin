<template>
  <div class="layout-page">
    <router-view>首页架子 - 内容区域</router-view>
    <van-tabbar v-model="active" route>
      <van-tabbar-item icon="home-o" to="/article">主页</van-tabbar-item>
      <van-tabbar-item icon="like-o" to="/like">喜欢</van-tabbar-item>
      <van-tabbar-item icon="star-o" to="/collect">收藏</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/user">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'LayoutPage',
  data: function () {
    return {
      active: 0
    }
  }
}
</script>

<style lang="less" scoped></style>
