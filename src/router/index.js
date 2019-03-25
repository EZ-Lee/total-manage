import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login'
import SysManage from '@/components/menu/SysManage'
import Websit from '@/components/menu/websit_setting/Websit_1'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'menu',
      component: SysManage,
      children: [
        {
          path: '/web',
          name: 'setting',
          component: Websit
        }
      ]
    }
  ]
})
