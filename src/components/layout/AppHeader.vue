<template>
  <div class="container px-5 mx-auto flex justify-between gap-4 items-center h-15">
    <app-sidebar></app-sidebar>
    <router-link to="/" class="mr-auto lg:mr-0">
      <img
        src="/logo.svg" 
        class="w-32 lg:w-41.75" 
        alt="Brand Logo"
      />
    </router-link>
    <el-menu
      :default-active="activeIndex"
      mode="horizontal"
      class="border-none! app-menu lg:flex! hidden!"
      :ellipsis="false"
      @select="handleSelect"
    >
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
      <el-icon @click="toggleTheme()" class="hidden! sm:block! cursor-pointer hover:opacity-75 transition-opacity duration-150">
        <Sunny color="#303133" v-if="currentTheme !== 'dark'" />
        <Moon color="#303133" v-else />
      </el-icon>
      <lang-select></lang-select>
      <el-icon class="cursor-pointer hover:text-[#E6A23C]! transition-colors duration-300" color="#303133">
        <Search /> 
      </el-icon>
      <el-button round type="warning" @click="$router.push('auth/login')">Login</el-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import AppSidebar from './AppSidebar.vue';
import LangSelect from '../ui/LangSelect.vue';

const activeIndex = ref('0')
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
}

const currentTheme = ref('light')
const toggleTheme = () => {
  currentTheme.value = currentTheme.value === 'light' ? 'dark' : 'light'
  console.log('Toggle theme to:', currentTheme.value)
}
</script>