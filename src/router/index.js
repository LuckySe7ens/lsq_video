import Vue from 'vue'
import VueRouter from 'vue-router'
import cinema from '../views/cinema'
import mine from '../views/mine'
import movie from '../views/movie'
import lists from '../views/lists'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/cinema',
    name: 'cinema',
    component: () => import('../views/cinema')
  },
    {
      path: '/mine',
      name: 'mine',
      component: () => import('../views/mine')
    },
    {
      path: '/movie',
      name: 'movie',
      component: () => import('../views/movie')
    },
    {
      path: '/lists',
      name : 'lists',
      component: () => import('../views/lists')
    },
    {
      path: '/heads',
      name : 'heads',
      component: () => import('../views/heads')
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
