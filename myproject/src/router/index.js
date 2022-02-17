import Vue from 'vue'
import Router from 'vue-router'
import Users from '@/components/Users'
import Followers from '@/components/Followers'
import Following from '@/components/Following1'
import Profile from '@/components/Profile'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/users',
      name: 'Users',
      component: Users
    },
    {
      path: '/:name/followers',
      name: 'Followers',
      props: true,
      component: Followers
    },
    {
      path: '/:name/following',
      name: 'Following',
      props: true,
      component: Following
    },
    {
      path: '/profile/:name',
      props: true,
      name: 'Profile',
      component: Profile
    }
  ]
})
