import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login'
import SysManage from '@/components/menu/SysManage'
import Domain from '@/components/menu/reaml_name_manage/Domain'
import StationAdminManage from '@/components/menu/station_admin_manage/StationAdminManage'
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
      name: 'SysManage',
      component: SysManage,
      children: [
        {
          path: '/domain',
          name: 'Domain',
          component: Domain
        },
				{
				  path: '/station',
				  name: 'StationAdminManage',
				  component: StationAdminManage
				}
      ]
    }
  ]
})
