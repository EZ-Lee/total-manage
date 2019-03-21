import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import SysManage from '@/components/menu/SysManage'
import Websit from '@/components/menu/websit_setting/Websit_1'

Vue.use(Router)

export default new Router({
  routes: [
    { 
			path: '/',
			name: 'Login',
			component: Login,
			children: [
				{
					path: '/',
					name: 'menu',
					component: SysManage,
					children: [
							{
							path:'/web',
							name: 'setting',
							component: Websit
						}
					]
				}
			]
    }
  ]
})
