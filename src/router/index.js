import AuthLayout from '@/layouts/AuthLayout.vue'
import MainLayout from '@/layouts/MainLayout.vue'
import { useAuthStore } from '@/stores/auth/useAuthStore';
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
          component: () => import('@/views/HomeView.vue'),
        },
        {
          path: 'course',
          name: 'Course',
          component: () => import('@/views/Course.vue')
        },
      ],
    },
    {
      path: '/auth',
      name: 'AuthLayout',
      component: AuthLayout,
      children: [
        {
          path: 'signin',
          name: 'SignIn',
          component: () => import('@/views/auth/SignInView.vue')
        },
      ]
    }
  ],
});

router.beforeEach(async (to, from, next) => {
    const auth_store = useAuthStore();

  if (to.name === 'SignIn' && auth_store.user?.name) {
    return next({ path: '/' });
  }

  if (to.name !== 'SignIn') {
    try {
      await auth_store.verify();
      next();
    } catch (error) {
      next({ name: 'SignIn' });
    }
  } else {
    next();
  }
})

export default router
