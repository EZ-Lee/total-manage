import axios from 'axios'
import router from '../router'
import ElementUI from 'element-ui'

// 创建axios实例
const $http = axios.create({
  timeout: 10000 // 请求超时时间
})

$http.defaults.baseURL = 'http://106.14.113.90/'

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
      switch (response.data.status) {
        case 401:
          ElementUI.Message.error('登录失效请重新登录')
          router.push({path: '/login'})
          break
        case 403:
          ElementUI.Message.error('无此操作权限')
          break
        default :
          ElementUI.Message.error(response.data.message)
          break
      }
      return Promise.reject(response.data)
    }
    return Promise.resolve(response)
  },
  function (error) {
    ElementUI.Message.error('连接服务网关发生错误')
    return Promise.reject(error)
  }
)
export default $http
