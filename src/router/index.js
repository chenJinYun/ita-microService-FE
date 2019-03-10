import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/Home'
import UserInfo from '@/view/UserInfo'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/userInfo',
      name: 'UserInfo',
      component: UserInfo
    }
  ]
})
