// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './style/theme.css'
import './style/character.css'
import VueResource from 'vue-resource'
import $http from './axios/setting'
import store from './vuex/store'
Vue.use(VueResource)

// 注册element-ui
Vue.use(ElementUI)

Vue.use(BootstrapVue)

Vue.prototype.axios = $http

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.path !== '/login' && !sessionStorage.getItem('token')) {
    next({path: '/login'})
    return
  }
  if (to.path === '/login') {
    sessionStorage.removeItem('token')
  }
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
