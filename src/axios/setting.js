import axios from 'axios'
import router from '../router'
import ElementUI from 'element-ui'

// 创建axios实例
const $http = axios.create({
  timeout: 10000 // 请求超时时间
})

$http.defaults.baseURL = 'http://localhost:8001/'

$http.interceptors.request.use(config => {
  config.headers = {
    'Content-Type': 'application/json;charset=UTF-8'
  }
  if (sessionStorage.getItem('token')) {
    config.headers.Authorization = 'Bearer ' + sessionStorage.getItem('token')
  }
  return config
}, err => {
  return Promise.reject(err)
})

$http.interceptors.response.use(
  function (response) {
    return Promise.resolve(response)
  },

  function (error) {
    switch (error.response.status) {
      case 401:
        ElementUI.Message.error('你无此操作权限')
        break
      case 403:
        router.push({path: '/login'})
        break
    }
    return Promise.reject(error)
  }
)
export default $http
