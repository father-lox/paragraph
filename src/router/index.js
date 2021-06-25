import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta:{layout: 'homeLayout'},
    component: () => import('../views/Home')
  },
  {
    path: '/login',
    name: 'login',
    meta:{layout: 'loginLayout'},
    component: () => import('../views/Login')
  },
  {
    path: '/registration',
    name: 'registration',
    meta:{layout: 'registrationLayout'},
    component: () => import('../views/Registration')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
