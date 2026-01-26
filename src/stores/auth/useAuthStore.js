import { defineStore } from "pinia";
import { useApiStore } from "../api/useApiStore";

import { ref } from "vue";
import router from "@/router";
import cookies from "vue-cookies";

export const useAuthStore = defineStore('authStore', () => {
  const api = useApiStore()
  
  const loading = ref(false)

  const login = async (data) => {
    loading.value = true
    try {
      const res = await api.post('/auth/login', data);

      // const { access_token, user: userData } = res;
      // token_store.setToken(access_token);

      // const refToken = await api.post('/auth/ref_token', { access_token });
      // const { refresh_token } = refToken;
      // token_store.setRefToken(refresh_token);

      setTimeout(() => {
        router.replace("/")
      }, 1500);

    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => {
        loading.value = false
      }, 1200);
    }
  }

  return { user, loading, login }
})