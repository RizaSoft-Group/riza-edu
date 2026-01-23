<template>
  <div class="login w-full min-h-screen">
    <div class="grid grid-cols-1 md:grid-cols-3 min-h-screen">
      <!-- Left Image -->
      <div class="image-section bg-blue-50 flex items-center justify-center p-8">
        <div class="relative w-full max-w-md">
          <img src="/login/left-image.png" alt="Login image" class="w-full h-auto" />
        </div>
      </div>

      <!-- Right Content -->
      <div class="content-section flex flex-col justify-center items-center p-8 bg-white md:col-span-2 relative">
        <!-- Back to Home Button -->
        <el-button type="primary" @click="$router.push('/')" class="absolute! top-5 right-5">
          <el-icon :size="18">
            <ArrowLeft />
          </el-icon>
          <span class="hidden sm:inline ml-2">Bosh sahifaga qaytish</span>
        </el-button>

        <!-- Form Wrapper - Fixed Width -->
        <div class="w-full max-w-md mx-auto">
          <!-- Toggle Buttons - FIXED POSITION -->
          <div class="flex items-center justify-between gap-4 mb-8">
            <h3 class="text-gray-600 text-sm sm:text-base whitespace-nowrap">
              {{ isLogin ? "Don't have an account?" : "Already have an account?" }}
            </h3>
            <button
              class="border-2 border-blue-500 text-blue-500 px-6 py-2 text-sm font-bold rounded hover:bg-blue-50 transition whitespace-nowrap shrink-0"
              @click="toggleForm">
              {{ isLogin ? 'SIGN UP' : 'LOGIN' }}
            </button>
          </div>

          <!-- FORMS CONTAINER - Fixed Height -->
          <div class="forms-wrapper">
            <!-- Login Form -->
            <div v-if="isLogin" class="form-container">
              <h1 class="text-4xl font-medium mb-8 text-gray-800">Login</h1>

              <form @submit.prevent="handleLogin" class="space-y-4">
                <!-- Username/Email -->
                <div>
                  <label class="text-gray-500 text-xs font-medium block mb-1.5">
                    USERNAME / EMAIL
                  </label>
                  <input v-model="loginForm.email" type="text" required
                    class="w-full h-11 px-3 text-sm border border-gray-300 rounded focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition" />
                </div>

                <!-- Password -->
                <div>
                  <label class="text-gray-500 text-xs font-medium block mb-1.5">
                    PASSWORD
                  </label>
                  <input v-model="loginForm.password" type="password" required
                    class="w-full h-11 px-3 text-sm border border-gray-300 rounded focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition" />
                </div>

                <!-- Remember & Forgot -->
                <div class="flex items-center justify-between py-2">
                  <label class="flex items-center cursor-pointer">
                    <input v-model="loginForm.remember" type="checkbox" class="w-4 h-4 mr-2 cursor-pointer" />
                    <span class="text-xs text-gray-600">Keep me logged in</span>
                  </label>
                  <router-link to="/updatepassword" class="text-xs text-blue-500 hover:underline whitespace-nowrap">
                    Forgot password?
                  </router-link>
                </div>

                <!-- Submit Button -->
                <button type="submit"
                  class="w-full bg-blue-500 text-white text-sm font-semibold py-2.5 rounded hover:bg-blue-600 transition mt-4">
                  LOGIN
                </button>

                <!-- Social Login -->
                <div class="pt-4">
                  <p class="text-gray-400 text-xs text-center mb-3">OR LOGIN USING</p>
                  <div class="grid grid-cols-3 gap-2">
                    <button type="button"
                      class="flex flex-col items-center justify-center gap-1 border border-gray-300 py-2 rounded hover:bg-gray-50 transition text-xs">
                      <i class="fa-brands fa-facebook text-blue-500 text-lg"></i>
                      <span class="hidden sm:inline">Facebook</span>
                    </button>
                    <button type="button"
                      class="flex flex-col items-center justify-center gap-1 border border-gray-300 py-2 rounded hover:bg-gray-50 transition text-xs">
                      <i class="fa-brands fa-google text-red-400 text-lg"></i>
                      <span class="hidden sm:inline">Google</span>
                    </button>
                    <button type="button"
                      class="flex flex-col items-center justify-center gap-1 border border-gray-300 py-2 rounded hover:bg-gray-50 transition text-xs">
                      <i class="fa-brands fa-microsoft text-blue-500 text-lg"></i>
                      <span class="hidden sm:inline">Microsoft</span>
                    </button>
                  </div>
                </div>

                <!-- reCAPTCHA Notice -->
                <p class="text-[10px] text-gray-400 text-center pt-4 leading-tight">
                  This site is protected by reCAPTCHA and the Google
                  <a href="#" class="text-blue-500 hover:underline">Privacy Policy</a> and
                  <a href="#" class="text-blue-500 hover:underline">Terms of Service</a> apply.
                </p>
              </form>
            </div>

            <!-- Register Form -->
            <div v-else class="form-container">
              <h1 class="text-4xl font-medium mb-8 text-gray-800">Sign Up</h1>

              <form @submit.prevent="handleRegister" class="space-y-3">
                <!-- Username -->
                <div>
                  <label class="text-gray-500 text-xs font-medium block mb-1.5">
                    USERNAME
                  </label>
                  <input v-model="registerForm.username" type="text" required
                    class="w-full h-11 px-3 text-sm border border-gray-300 rounded focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition" />
                </div>

                <!-- Email -->
                <div>
                  <label class="text-gray-500 text-xs font-medium block mb-1.5">
                    EMAIL
                  </label>
                  <input v-model="registerForm.email" type="email" required
                    class="w-full h-11 px-3 text-sm border border-gray-300 rounded focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition" />
                </div>

                <!-- Password -->
                <div>
                  <label class="text-gray-500 text-xs font-medium block mb-1.5">
                    PASSWORD
                  </label>
                  <input v-model="registerForm.password" type="password" required
                    class="w-full h-11 px-3 text-sm border border-gray-300 rounded focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition" />
                </div>

                <!-- Confirm Password -->
                <div>
                  <label class="text-gray-500 text-xs font-medium block mb-1.5">
                    CONFIRM PASSWORD
                  </label>
                  <input v-model="registerForm.confirmPassword" type="password" required
                    class="w-full h-11 px-3 text-sm border border-gray-300 rounded focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition" />
                </div>

                <!-- Terms & Conditions -->
                <div class="flex items-start py-2">
                  <input v-model="registerForm.agreeToTerms" type="checkbox" required
                    class="w-4 h-4 mt-0.5 mr-2 cursor-pointer shrink-0" />
                  <span class="text-xs text-gray-600 cursor-pointer">
                    I agree to the
                    <a href="#" class="text-blue-500 hover:underline">Terms & Conditions</a>
                  </span>
                </div>

                <!-- Submit Button -->
                <button type="submit"
                  class="w-full bg-blue-500 text-white text-sm font-semibold py-2.5 rounded hover:bg-blue-600 transition mt-2">
                  SIGN UP
                </button>

                <!-- Social Signup -->
                <div class="pt-3">
                  <p class="text-gray-400 text-xs text-center mb-3">OR SIGN UP USING</p>
                  <div class="grid grid-cols-3 gap-2">
                    <button type="button"
                      class="flex flex-col items-center justify-center gap-1 border border-gray-300 py-2 rounded hover:bg-gray-50 transition text-xs cursor-pointer">
                      <i class="fa-brands fa-facebook text-blue-500 text-lg"></i>
                      <span class="hidden sm:inline">Facebook</span>
                    </button>
                    <button @click="push('google.com')" type="button"
                      class="flex flex-col items-center justify-center gap-1 border border-gray-300 py-2 rounded hover:bg-gray-50 transition text-xs cursor-pointer">
                      <i class="fa-brands fa-google text-red-400 text-lg"></i>
                      <span class="hidden sm:inline">Google</span>
                    </button>
                    <button type="button"
                      class="flex flex-col items-center justify-center gap-1 border border-gray-300 py-2 rounded hover:bg-gray-50 transition text-xs cursor-pointer">
                      <i class="fa-brands fa-microsoft text-blue-500 text-lg"></i>
                      <span class="hidden sm:inline">Microsoft</span>
                    </button>
                  </div>
                </div>

                <!-- reCAPTCHA Notice -->
                <p class="text-[10px] text-gray-400 text-center pt-3 leading-tight">
                  This site is protected by reCAPTCHA and the Google
                  <a href="#" class="text-blue-500 hover:underline">Privacy Policy</a> and
                  <a href="#" class="text-blue-500 hover:underline">Terms of Service</a> apply.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { registerUser, loginUser } from "@/utils/auth"

const router = useRouter()

const isLogin = ref(true)

const toggleForm = () => {
  isLogin.value = !isLogin.value
}

const loginForm = ref({
  email: '',
  password: '',
  remember: false
})

const registerForm = ref({
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  agreeToTerms: false
})

const handleLogin = () => {
  const success = loginUser(
    loginForm.value.email,
    loginForm.value.password
  )

  if (success) {
    ElMessage.success("Muvaffaqiyatli tizimga kirdingiz!")
    router.push("/")
  } else {
    ElMessage.error("Email yoki parol noto‘g‘ri!")
  }
}


const handleRegister = () => {
  if (registerForm.value.password !== registerForm.value.confirmPassword) {
    ElMessage.error("Takroriy parol noto‘g‘ri kiritildi!")
    return
  }

  registerUser({
    username: registerForm.value.username,
    email: registerForm.value.email,
    password: registerForm.value.password
  })

  ElMessage.success("Muvaffaqiyatli ro‘yxatdan o‘tdingiz!")
  isLogin.value = true
}

</script>

<style scoped>
.login {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
}

/* Forms wrapper - prevents layout shift */
.forms-wrapper {
  position: relative;
  min-height: 500px;
}

/* Form animation */
.form-container {
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive */
@media (max-width: 1024px) {
  .image-section {
    display: none;
    justify-content: center;
    align-items: center;
  }
}w
</style>
