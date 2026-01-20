import MainLayout from '@/layouts/MainLayout.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'MainLayout',
      component: MainLayout,
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('@/views/homepage/HomeView.vue'),
        },
        {
          path: 'course',
          name: 'Course',
          component: () => import('@/views/courselisting/Course.vue')
        },
        {
          path: 'login',
          name: 'Login',
          component: () => import('@/components/login/Login.vue')
        },
        {
          path: 'register',
          name: 'Register',
          component: () => import('@/components/login/Register.vue')
        }
      ],
    }
  ],
})

export default router
