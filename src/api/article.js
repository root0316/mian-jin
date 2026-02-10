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
