<template>
  <div class="form-container">
    <h1 class="text-4xl font-medium mb-8 text-gray-800">Sign Up</h1>
    <el-form @submit.prevent="handleRegister" label-position="top" size="large" require>
      <!-- Username -->
      <el-form-item label="Username" class="mb-2">
        <el-input v-model="registerForm.username" placeholder="Enter your username" clearable type="text" required />
      </el-form-item>

      <!-- Email -->
      <el-form-item label="Email" class="mb-2">
        <el-input v-model="registerForm.email" placeholder="Enter your email" clearable type="email" required />
      </el-form-item>

      <!-- Password -->
      <el-form-item label="Password" class="mb-2">
        <el-input v-model="registerForm.password" placeholder="Password" clearable type="password" required show-password />
      </el-form-item>

      <!-- Confirm Password -->
      <el-form-item label="Confirm password" class="mb-2">
        <el-input v-model="registerForm.confirmPassword" placeholder="Confirm password" clearable type="password" required show-password/>
      </el-form-item>

      <!-- Terms & Conditions -->
      <div class="flex items-start py-2">
        <el-checkbox class="text-xs text-gray-600 cursor-pointer">
          I agree to the
          <el-link @click="$router.push('terms')" type="primary">Terms & Conditions</el-link>
        </el-checkbox>
      </div>

      <!-- Submit Button -->
      <el-form-item prop="name" class="mt-4">
        <el-button type="primary" native-type="submit" class="w-full">
          SIGN UP
        </el-button>
      </el-form-item>

      <!-- Social Signup -->
      <div class="mt-10">
        <el-divider>OR LOGIN USING </el-divider>
        <div class="grid grid-cols-3 gap-2">
          <el-button>
            <i class="fa-brands fa-facebook text-blue-500 text-lg"></i>
            Facebook
          </el-button>
          <el-button>
            <i class="fa-brands fa-google text-red-400 text-lg"></i>
            Google
          </el-button>
          <el-button>
            <i class="fa-brands fa-microsoft text-blue-500 text-lg"></i>
            Microsoft
          </el-button>
        </div>
      </div>

      <!-- reCAPTCHA Notice -->
      <p class="text-[12px] text-gray-400 text-center pt-3 leading-tight">
        This site is protected by reCAPTCHA and the Google
        <el-link type="primary">Privacy Policy</el-link>
        and
        <el-link type="primary">Terms of Service</el-link>
        apply.
      </p>
    </el-form>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";

export default {
  name: "RegisterView",
  setup() {
    const router = useRouter();
    const registerForm = ref({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    const handleRegister = async () => {
      if (registerForm.value.password !== registerForm.value.confirmPassword) {
        ElMessage.error("Password error");
        return;
      }

      try {
        ElMessage.success("Regiter!");
        router.push('/');
      } catch (error) {
        ElMessage.error("Ro'yxatdan o'tishda xato");
      }
    };

    return {
      registerForm,
      handleRegister,
    };
  },
};
</script>

<style scoped>
.form-container {
  animation: fadeIn 0.3s ease-in-out;
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
</style>
