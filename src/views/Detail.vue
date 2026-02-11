<template>
  <div class="detail-page">
    <van-nav-bar
      left-text="返回"
      @click-left="$router.back()"
      fixed
      title="面经详情"
    />
    <header class="header">
      <h1>{{ article.stem }}</h1>
      <p>
        {{ article.createdAt }} | {{ article.views }} 浏览量 | {{ article.likeCount }} 点赞数
      </p>
      <p>
        <img :src="article.avatar" alt=""/>
        <span>{{ article.creator }}</span>
      </p>
    </header>
    <main class="body" v-html="article.content"></main>
    <div class="opt">
      <van-icon
        :class="{ active: article.likeFlag }"
        :name="article.likeFlag ? 'like' : 'like-o'"
        @click="toggleLike"
      />
      <van-icon
        :class="{ active: article.collectFlag }"
        :name="article.collectFlag ? 'star' : 'star-o'"
        @click="toggleCollect"
      />
    </div>
  </div>
</template>

<script>
import { changeCollect, changeLike, getArticleDetail } from '@/api/article'

export default {
  name: 'detail-page',
  data () {
    return {
      article: {}
    }
  },
  async created () {
    await this.fetchArticleDetail()
  },
  methods: {
    async fetchArticleDetail () {
      const id = this.$route.params.id
      const response = await getArticleDetail(id)
      // // 处理avatar中的多余空格和反引号
      // data.avatar = data.avatar.trim().replace(/[`]/g, '')
      // // 处理content中的多余空格和反引号
      // data.content = data.content.replace(/[`]/g, '')
      this.article = response.data
    },
    async toggleLike () {
      try {
        await changeLike(this.$route.params.id)
        this.article.likeFlag = !this.article.likeFlag
        if (this.article.likeFlag === false) {
          this.article.likeCount--
        } else {
          this.$toast.success({ message: '点赞成功', duration: 200 })
          this.article.likeCount++
        }
      } catch (error) {
        this.$toast.fail('操作失败')
      }
    },
    async toggleCollect () {
      try {
        await changeCollect(this.$route.params.id)
        this.article.collectFlag = !this.article.collectFlag
        if (this.article.collectFlag === true) {
          this.$toast.success({ message: '收藏成功', duration: 200 })
        }
      } catch (error) {
        this.$toast.fail('收藏失败')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.detail-page {
  margin-top: 44px;
  overflow: hidden;
  padding: 0 15px;

  .header {
    h1 {
      font-size: 24px;
    }

    p {
      color: #999;
      font-size: 12px;
      display: flex;
      align-items: center;
    }

    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
    }
  }

  .opt {
    position: fixed;
    bottom: 100px;
    right: 0;

    > .van-icon {
      margin-right: 20px;
      background: #fff;
      width: 40px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      border-radius: 50%;
      box-shadow: 2px 2px 10px #ccc;
      font-size: 18px;

      &.active {
        background: #FEC635;
        color: #fff;
      }
    }
  }
}
</style>
