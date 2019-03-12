import Vue from 'vue'
import Router from 'vue-router'
import SysManage from '@/components/menu/SysManage'
import Websit from '@/components/menu/websit_setting/Websit_1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'menu',
      component: SysManage,
			children:[
				{
				  path: '/websit',
				  name: 'setting',
				  component: Websit
				}
			]
    }
  ]
})
