import request from '@/utils/request'

export const getArticles = (obj) => {
  return request.get('/interview/query', {
    params: {
      current: obj.current || 1,
      pageSize: obj.pageSize || 10,
      sorter: obj.sorter
    }
  })
}

export const getArticleDetail = (id) => {
  return request.get('/interview/show', {
    params: {
      id
    }
  })
}

export const changeLike = (id) => {
  return request.post('/interview/opt', {
    id: id,
    optType: 1
  })
}

export const changeCollect = (id) => {
  return request.post('/interview/opt', {
    id: id,
    optType: 2
  })
}

// 获取我的喜欢
export const getArticlesLike = (obj) => {
  return request.get('/interview/opt/list', {
    params: {
      page: obj.page, // 当前页
      pageSize: 5, // 可选
      optType: 1 // 表示喜欢
    }
  })
}

// 获取我的收藏
export const getArticlesCollect = (obj) => {
  return request.get('/interview/opt/list', {
    params: {
      page: obj.page, // 当前页
      pageSize: 5, // 可选
      optType: 2 // 表示收藏
    }
  })
}
