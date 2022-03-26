import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/product',
    name: 'product.list',
    component: () => import(/* webpackChunkName: "about" */ '../views/products/Product_portfolio.vue')
  },
  {
    path: '/product/details',
    name: 'product.details',
    component: () => import(/* webpackChunkName: "about" */ '../views/products/Product_details.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
