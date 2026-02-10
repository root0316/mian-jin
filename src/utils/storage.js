const KEY = 'mian-jin-token'

export const getToken = () => {
  return localStorage.getItem(KEY)
}
export const setToken = (token) => {
  localStorage.setItem(KEY, token)
}
export const delToken = () => {
  localStorage.removeItem(KEY)
}
