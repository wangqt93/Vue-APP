import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/home/home.vue'
import City from '@/components/city/City.vue'
import Detail from '@/components/details/detail.vue'

Vue.use(VueRouter)

  const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
      {
        path: '/',
        component: Home
      },
      {
        path: '/city',
        component: City
      },
      {
        path: '/detail',
        component: Detail
      }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
