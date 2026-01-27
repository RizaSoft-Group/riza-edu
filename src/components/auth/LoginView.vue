<template>
  <div class="form-container">
    <h1 class="text-4xl font-medium mb-8 text-gray-800">Login</h1>

    <el-form ref="loginFormRef" label-position="top" size="large">
      <!-- Username/Email -->
      <el-form-item label="Email or Username" class="mb-3" prop="username">
        <el-input placeholder="Enter your email or username" clearable />
      </el-form-item>

      <!-- Password -->
      <el-form-item label="Password" class="mb-2" prop="password">
        <el-input placeholder="Enter your password" clearable type="password" show-password/>
      </el-form-item>

      <!-- Remember & Forgot -->
      <div class="flex items-center justify-between py-2">
        <el-checkbox class="text-xs text-gray-600">Keep me logged in</el-checkbox>
        <el-link @click="$router.push('updatepssword')" type="primary" class="text-xs">
          Forgot password?
        </el-link>
      </div>

      <!-- Submit Button -->
      <el-form-item class="mt-4">
        <el-button type="primary" native-type="submit" class="w-full">
          LOGIN
        </el-button>
      </el-form-item>

      <!-- Social Login -->
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
      <p class="text-[12px] text-gray-400 text-center pt-4 leading-tight">
        This site is protected by reCAPTCHA and the Google
        <el-link type="primary" :underline="false" href="#" class="text-[10px]">Privacy Policy</el-link>
        and
        <el-link type="primary" :underline="false" href="#" class="text-[10px]">Terms of Service</el-link>
        apply.
      </p>
    </el-form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";

const router = useRouter();
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
