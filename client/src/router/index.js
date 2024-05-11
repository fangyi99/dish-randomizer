import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/menu',
    name: 'Menu',
    component: () => import('../views/MenuView.vue')
  },
  {
    path: '/form',
    name: 'Create',
    component: () => import('../views/FormView.vue')
  },
  {
    path: '/form/:id',
    name: 'Update',
    component: () => import('../views/FormView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
