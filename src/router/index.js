import AuthLayout from '@/layouts/AuthLayout.vue'
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
      ],
    },
    {
      path: '/auth',
      name: 'AuthLayout',
      component: AuthLayout,
      children: [
        {
          path: 'login',
          name: 'Login',
          component: () => import('@/views/auth/LoginView.vue')
        },
        {
          path: 'register',
          name: 'Register',
          component: () => import('@/views/auth/Register.vue')
        }
      ]
    }
  ],
})

export default router
