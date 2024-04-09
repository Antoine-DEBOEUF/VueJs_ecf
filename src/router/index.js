import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MonsterList from '@/components/MonsterList.vue'
import MonsterDetails from '@/components/MonsterDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/MonsterList',
      name: 'MonsterList',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: MonsterList
    },
    {
      path: '/Monster/:id',
      name: 'MonsterDetails',
      component: MonsterDetails
    },

  ]
})

export default router
