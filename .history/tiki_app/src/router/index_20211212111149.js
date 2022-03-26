import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/products',
    name: 'products.portfolio',
    component: () => import(/* webpackChunkName: "about" */ '../views/products/Product_portfolio.vue')
  },
  {
    path: '/products/details',
    name: 'products.details',
    component: () => import(/* webpackChunkName: "about" */ '../views/products/Product_details.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
