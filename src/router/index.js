import { createRouter, createWebHistory } from 'vue-router'
import UpcomingLaunches from '../views/UpcomingLaunches.vue'
import PastLaunches from '../views/PastLaunches.vue'
import LaunchView from '../views/LaunchView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/upcoming'
    },
    {
      path: '/upcoming',
      component: UpcomingLaunches
    },
    {
      path: '/past',
      component: PastLaunches
    },
    {
      path: '/launch/:id',
      component: LaunchView
    }
  ],
})

export default router
