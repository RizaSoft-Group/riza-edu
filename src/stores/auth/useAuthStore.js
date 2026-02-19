import { defineStore } from "pinia";

import { ref } from "vue";
import router from "@/router";
// import { useApiStore } from "../api/useApiStore";

export const useAuthStore = defineStore('authStore', () => {
  // const api = useApiStore();
  
  const loading = ref(false);
  const user = ref(null);

  const signIn = async (data) => {
    loading.value = true;
    try {
      // const res = await api.post('/auth/login', data);

      localStorage.setItem("credentals", JSON.stringify(data));
      user.value = { ...data };

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

  const verify = async () => {
    // const res = await api.get('/auth/verify');
    // user.value = res.data;
    const userData = localStorage.getItem("credentals");

    user.value = { ...JSON.parse(userData) }
  }

  const signUp = async (data) => {
    // const res = await api.post('/auth/signup', data);
    // user.value = res.data;

    setTimeout(() => {
      router.replace("/auth/login");
    }, 1500);
  }

  return { user, loading, signIn, verify, signUp }
})