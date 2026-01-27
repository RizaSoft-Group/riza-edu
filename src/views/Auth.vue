<template lang="html">
  <div class="login w-full min-h-screen">
    <div class="grid grid-cols-1 md:grid-cols-3 min-h-screen">
      <!-- left image -->
      <div class="image-section bg-blue-50 flex items-center justify-center p-8">
        <div class="relative w-full max-w-md">
          <img src="/login/left-image.png" alt="Login image" class="w-full h-auto" />
        </div>
      </div>
      <!-- right content -->
      <div class="content-section flex flex-col justify-center items-center p-8 bg-white md:col-span-2 relative">
        <!-- Back to Home Button -->
        <el-button type="primary" @click="$router.push('/')" class="absolute! top-5 right-5">
          <el-icon :size="18">
            <ArrowLeft />
          </el-icon>
          <span class="hidden sm:inline ml-2">Bosh sahifaga qaytish</span>
        </el-button>

        <div class="w-full max-w-md mx-auto">
          <!-- Toggle Buttons - FIXED POSITION -->
          <div class="flex items-center justify-between gap-4 mb-8">
            <h3 class="text-gray-600 text-sm sm:text-base whitespace-nowrap">
              {{
                isLogin ? "Don't have an account?" : "Already have an account?"
              }}
            </h3>
            <el-button type="primary" size="large" @click="toggleForm">
              {{ isLogin ? "SIGN UP" : "LOGIN" }}
            </el-button>
          </div>
          <!-- Component Render -->
          <Transition name="fade" mode="out-in">
            <component :is="isLogin ? Login : Register"/>
          </Transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ArrowLeft } from "@element-plus/icons-vue";
import Login from "@/components/auth/LoginView.vue";
import Register from "@/components/auth/RegisterView.vue";

const isLogin = ref(true);


const toggleForm = () => {
  isLogin.value = !isLogin.value;
};
</script>

<style scoped>
.login {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, sans-serif;
}

/* Responsive */
@media (max-width: 1024px) {
  .image-section {
    display: none;
    justify-content: center;
    align-items: center;
  }
}
</style>
