<template>
  <div class="container px-5 mx-auto flex justify-between gap-4 items-center h-15">
    <app-sidebar></app-sidebar>
    <router-link to="/" class="mr-auto lg:mr-0">
      <img src="/rizalogo.png" class="w-32 lg:w-41.75" alt="Brand Logo" />
    </router-link>
    <el-menu :default-active="activeIndex" mode="horizontal" class="border-none! app-menu lg:flex! hidden!"
      :ellipsis="false" @select="handleSelect">
      <el-menu-item index="0" @click="$router.push('/')">
        Home
      </el-menu-item>
      <el-menu-item index="1" @click="$router.push('/course')">Course</el-menu-item>
      <el-menu-item index="2" @click="$router.push('/blog')">Blog</el-menu-item>
      <el-sub-menu index="3">
        <template #title>Page</template>
        <el-menu-item index="3-1" @click="$router.push('/contact')">Contact</el-menu-item>
        <el-menu-item index="3-2" @click="$router.push('/faqs')">FAQs</el-menu-item>
        <el-menu-item index="3-3" @click="$router.push('/error')">Error</el-menu-item>
        <el-sub-menu index="3-4">
          <template #title>item four</template>
          <el-menu-item index="3-4-1">item one</el-menu-item>
          <el-menu-item index="3-4-2">item two</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="4" @click="$router.push('/learnepress')">LearnPress Add-On</el-menu-item>
      <el-menu-item index="5" @click="$router.push('/premium')">Premium Theme</el-menu-item>
    </el-menu>
    <div class="flex items-center gap-3 sm:gap-5">
      <el-icon @click="toggleTheme()"
        class="hidden! sm:block! cursor-pointer hover:opacity-75 transition-opacity duration-150">
        <Sunny color="#303133" v-if="currentTheme !== 'dark'" />
        <Moon color="#303133" v-else />
      </el-icon>
      <lang-select></lang-select>
      <el-icon class="cursor-pointer hover:text-[#E6A23C]! transition-colors duration-300" color="#303133">
        <Search />
      </el-icon>
      <div class="flex items-center gap-4">
        <!-- LOGIN -->
        <router-link v-if="!isAuth" to="auth/login">
          <button class="px-6 py-2 bg-orange-500 text-white rounded-[20px] cursor-pointer">
            Login
          </button>
        </router-link>

        <!-- USER -->
        <div v-else class="flex items-center gap-3">
          <el-dropdown :hide-on-click="false">
            <span class="el-dropdown-link">Accaunt<el-icon class="el-icon--right"><arrow-down /></el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>Accaunt</el-dropdown-item>
                <el-dropdown-item>
                  <i class="fa-solid fa-arrow-right-from-bracket color"></i>
                   Exit
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { isAuthenticated, getCurrentUser, logoutUser } from '@/utils/auth'

import AppSidebar from './AppSidebar.vue'
import LangSelect from '../ui/LangSelect.vue'

const router = useRouter()

// AUTH
const isAuth = ref(false)
const username = ref("")

onMounted(() => {
  isAuth.value = isAuthenticated()
  username.value = getCurrentUser()
})

const logout = () => {
  logoutUser()
  router.push('/login')
  location.reload()
}

// MENU
const activeIndex = ref('0')
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
}

// THEME
const currentTheme = ref('light')
const toggleTheme = () => {
  currentTheme.value = currentTheme.value === 'light' ? 'dark' : 'light'
}
</script>