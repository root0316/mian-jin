<template>
  <van-cell class="article-item" @click="$router.push(`/detail/${data.id}`)">
    <template #title>
      <div class="head">
        <img :src="data.avatar" alt="" />
        <div class="con">
          <p class="title van-ellipsis">{{data.stem}}</p>
          <p class="other">{{data.creator}} | {{data.createdAt}}</p>
        </div>
      </div>
    </template>
    <template #label>
      <div class="body van-multi-ellipsis--l2">
        {{clearHTMLTag(data.content)}}
      </div>
      <div class="foot">点赞 {{data.likeCount}} | 浏览 {{data.views}}</div>
    </template>
  </van-cell>
</template>

<script >
export default {
  name: 'articleItem',
  data () {
    return {
    }
  },
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    clearHTMLTag (str) {
      return str.replace(/<[^>]+>/g, '')
    }
  }
}
</script>
<style scoped lang="less">
.article-item {
  .head {
    display: flex;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
    }
    .con {
      flex: 1;
      overflow: hidden;
      padding-left: 10px;
      p {
        margin: 0;
        line-height: 1.5;
        &.title {
          width: 280px;
        }
        &.other {
          font-size: 10px;
          color: #999;
        }
      }
    }
  }
  .body {
    font-size: 14px;
    color: #666;
    line-height: 1.6;
    margin-top: 10px;
  }
  .foot {
    font-size: 12px;
    color: #999;
    margin-top: 10px;
  }
}
</style>
