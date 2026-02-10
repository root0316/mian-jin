import request from '@/utils/request.js'
export const register = (data) => {
  return request.post('/user/register', data)
}
export const login = (data) => {
  return request.post('/user/login', data)
}
