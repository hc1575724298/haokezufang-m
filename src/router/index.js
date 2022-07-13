/*
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-13 18:10:27
 * @LastEditors: sj
 * @LastEditTime: 2022-07-13 23:32:55
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/Register')
  },
  {
    path: '/',
    component: () => import('@/views/Layout'),
    children: [
      {
        path: '',
        redirect: 'home'
      },
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/Home')
      },
      {
        path: 'find',
        name: 'find',
        component: () => import('@/views/Find')
      },
      {
        path: 'info',
        name: 'info',
        component: () => import('@/views/Info')
      },
      {
        path: 'my',
        name: 'my',
        component: () => import('@/views/My')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
