<template>
  <div class="article-page">
    <nav class="my-nav van-hairline--bottom">
      <a
        :class="{active:sorter==='weight_desc'}"

        @click="changeSorter('weight_desc')"
        href="javascript:"
      >推荐</a
      >
      <a
        :class="{active:sorter===null}"
        @click="changeSorter(null)"
        href="javascript:"
      >最新</a
      >
      <div class="logo"><img src="@/assets/logo.png" alt=""></div>
    </nav>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onload">
      <ArticleItem v-for="(item) in list" :data="item" :key="item.id"></ArticleItem>
    </van-list>
  </div>
</template>

<script>
import { getArticles } from '@/api/article'

export default {
  name: 'article-page',
  data () {
    return {
      list: [],
      sorter: 'weight_desc',
      current: 1,
      loading: false,
      finished: false
    }
  },
  methods: {
    changeSorter (value) {
      this.sorter = value
      this.finished = false
      this.list = []
      this.current = 1
      this.onload()
    },
    async onload () {
      console.log('开始请求数据')
      const { data } = await getArticles({
        sorter: this.sorter,
        current: this.current
      })
      this.list.push(...data.rows)
      this.loading = false
      this.current++
      if (this.current > data.pageTotal) {
        this.finished = true
      }
      console.log('数据请求完毕')
    }
  },
  async created () {
  }

}
</script>

<style lang="less" scoped>
.article-page {
  margin-bottom: 50px;
  margin-top: 44px;

  .my-nav {
    height: 44px;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 999;
    background: #fff;
    display: flex;
    align-items: center;

    > a {
      color: #999;
      font-size: 14px;
      line-height: 44px;
      margin-left: 20px;
      position: relative;
      transition: all 0.3s;

      &::after {
        content: '';
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 0;
        width: 0;
        height: 2px;
        background: #222;
        transition: all 0.3s;
      }

      &.active {
        color: #222;

        &::after {
          width: 14px;
        }
      }
    }

    .logo {
      flex: 1;
      display: flex;
      justify-content: flex-end;

      > img {
        width: 64px;
        height: 28px;
        display: block;
        margin-right: 10px;
      }
    }
  }
}

</style>
