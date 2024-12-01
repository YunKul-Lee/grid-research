import { createRouter, createWebHistory } from 'vue-router'
import TabulatorView from '@/views/TabulatorView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TabulatorView,
    },
    {
      path: '/PrimeVue',
      name: 'primeVue',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* @ts-ignore*/'../views/PrimeVueView.vue'),
    },
    {
      path: '/IconField',
      name: 'iconField',
      component: () => import('../views/IconFieldView.vue'),
    }
  ],
})

export default router
