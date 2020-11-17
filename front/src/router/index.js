import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/list',
    name: 'List',
    component: () => import('../views/products/Index.vue')
  },
  {
    path: '/Create',
    name: 'Create',
    component: () => import('../views/products/Create.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
