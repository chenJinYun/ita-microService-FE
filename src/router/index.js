import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/Home'
import UserInfo from '@/components/UserInfo'
import userArticle from '@/components/userArticle'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/userInfo',
          name: 'UserInfo',
          component: UserInfo
        },
        {
          path: '/userArticle',
          name: 'userArticle',
          component: userArticle
        }
      ]
    },

  ]
})
