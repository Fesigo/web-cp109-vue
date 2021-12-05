import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/home',
    name: 'AF1',
    component: () => import('../views/Af1.vue')
  },
  {
    path: '/restaurants',
    name: 'Restaurants',
    component: () => import('../views/Restaurants.vue')
  },
  {
    path: '/events',
    name: 'Events',
    component: () => import('../views/Events.vue')
  },
  {
    path: '/restaurants/steakhouses',
    name: 'SteakHouse',
    component: () => import('../views/SteakHouses.vue')
  },
  {
    path: '/restaurants/:cardId',
    name: 'RestById',
    component: () => import('../views/RestById.vue')
  },
  {
    path: '/sobre',
    name: 'Sobre',
    component: () => import('../views/Sobre.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
