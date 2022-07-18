/*
 * @Descripttion:
 * @version:
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-13 18:10:27
 * @LastEditors: sj
 * @LastEditTime: 2022-07-17 16:10:04
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
    redirect: '/layout/home'
  },
  {
    path: '/layout',
    component: () => import('@/views/Layout'),
    children: [
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
  },
  {
    path: '/collect',
    component: () => import('@/views/Collect')
  },
  {
    path: '/management',
    component: () => import('@/views/Management')
  },
  {
    path: '/city',
    component: () => import('@/views/City')
  },
  {
    path: '/morehousemsg',
    name: 'morehousemsg',
    component: () => import('@/views/MoreHouseMsg')
  },
  {
    path: '/addhouse',
    component: () => import('@/views/addHouse')
  }
]

const router = new VueRouter({
  routes
})

export default router
