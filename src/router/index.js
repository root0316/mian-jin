import Vue from 'vue'
import VueRouter from 'vue-router'
import { getToken } from '@/utils/storage'

Vue.use(VueRouter)
const whiteList = ['/login', '/register']

const routes = [
  {
    path: '/',
    redirect: '/article',
    name: 'Layout',
    component: () => import('@/views/Layout.vue'),
    children: [
      {
        path: '/article',
        name: 'Article',
        component: () => import('@/views/Article.vue')
      },
      {
        path: '/like',
        name: 'Like',
        component: () => import('@/views/Like.vue')
      },
      {
        path: '/user',
        name: 'User',
        component: () => import('@/views/User.vue')
      },
      {
        path: '/collect',
        name: 'Collect',
        component: () => import('@/views/Collect.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/Register.vue')
  },
  {
    path: '/Detail',
    name: 'Detail',
    component: () => import('@/views/Detail.vue')
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  if (getToken() !== null) {
    next()
  } else if (whiteList.includes(to.path)) {
    next()
  } else {
    next('/login')
  }
})
export default router
