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
          path: 'blog',
          name: 'Blog',
          component: () => import('@/views/blog/Blog.vue')
        },
        {
          path: 'page',
          name: 'Page',
          component: () => import('@/views/page/Page.vue')
        },
        {
          path: 'error',
          name: 'Error',
          component: () => import('@/components/ui/ErrorAlert.vue')
        },
        {
          path: 'login',
          name: 'Login',
          component: () => import('@/views/login/Login.vue')
        },
        {
          path: 'register',
          name: 'Register',
          component: () => import('@/views/login/Register.vue')
        },
      ],
    }
  ],
})

export default router
