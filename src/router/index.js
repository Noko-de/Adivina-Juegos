import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'

import HomeView from '@/views/HomeView.vue'
import JuegosView from '@/views/JuegosView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: HomeView
    },
    {
      path: '/juegos',
      name: 'juego-del-dia',
      component: JuegosView
    },
  ],
})

export default router
