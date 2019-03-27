import axios from 'axios'
import router from '../router'
import ElementUI from 'element-ui'

// 创建axios实例
const $http = axios.create({
  timeout: 10000 // 请求超时时间
})

$http.defaults.baseURL = 'http://localhost:8888/'

$http.interceptors.request.use(config => {
  config.headers = {
    'Content-Type': 'application/json;charset=UTF-8'
  }
  if (sessionStorage.getItem('token')) {
    const token = sessionStorage.getItem('token')
    config.headers['Authorization'] = `Bearer ${token}`
  }
  return config
}, err => {
  return Promise.reject(err)
})

$http.interceptors.response.use(
  function (response) {
    if (response.data.status) {
      ElementUI.Message.error(response.data.message)
      return Promise.reject(response.data)
    }
    return Promise.resolve(response)
  },
  function (error) {
    ElementUI.Message.error('登录失效,请重新登录')
    router.push({path: '/login'})
    return Promise.reject(error)
  }
)
export default $http
