<template>
<<<<<<< HEAD
  <div class="container px-5 mx-auto flex justify-between gap-3 items-center h-15">
    <el-icon class="lg:hidden! cursor-pointer hover:opacity-75 transition-opacity duration-150">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
        <path
          d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z" />
      </svg>
    </el-icon>
    <router-link to="/" class="mr-auto">
      <img src="/logo.svg" alt="Brand Logo" />
=======
  <div class="container px-5 mx-auto flex justify-between gap-4 items-center h-15">
    <app-sidebar></app-sidebar>
    <router-link to="/" class="mr-auto lg:mr-0">
      <img
        src="/logo.svg" 
        class="w-32 lg:w-41.75" 
        alt="Brand Logo"
      />
>>>>>>> da1135dd26616c37242b47b6f7d8444425dec363
    </router-link>
    <el-menu :default-active="activeIndex" mode="horizontal" class="border-none! app-menu lg:flex! hidden!"
      :ellipsis="false" @select="handleSelect">
      <el-menu-item  @click="$router.push('/')">
        Home
      </el-menu-item>
      <el-menu-item  @click="$router.push('/course')">Course</el-menu-item>
      <el-menu-item  @click="$router.push('/blog')">Blog</el-menu-item>
      <el-sub-menu  @click="$router.push('/page')">
        <template #title>Page</template>
        <el-menu-item @click="$router.push('/contact')">Contact</el-menu-item>
        <el-menu-item @click="$router.push('/faqs')">FAQs</el-menu-item>
        <el-menu-item @click="$router.push('/error')">Error</el-menu-item>
        <el-sub-menu index="2-4">
          <template #title>item four</template>
          <el-menu-item index="2-4-1">item one</el-menu-item>
          <el-menu-item index="2-4-2">item two</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item @click="$router.push('/learnepress')">LearnPress Add-On</el-menu-item>
      <el-menu-item @click="$router.push('/premium')">Premium Theme</el-menu-item>
    </el-menu>
    <div class="flex items-center gap-3 sm:gap-5">
      <el-icon @click="toggleTheme()" class="hidden! sm:block! cursor-pointer hover:opacity-75 transition-opacity duration-150">
        <Sunny color="#303133" v-if="currentTheme !== 'dark'" />
        <Moon color="#303133" v-else />
      </el-icon>
<<<<<<< HEAD
      <lang-select></lang-select>
      <el-icon class="cursor-pointer hover:text-[#E6A23C]! transition-colors duration-300" color="#303133">
        <Search /> 
=======
      <div class="hidden! sm:block!">
        <lang-select></lang-select>
      </div>
      <el-icon
        class="cursor-pointer hover:text-[#E6A23C]! transition-colors duration-300"
        color="#303133"
      >
        <Search />
>>>>>>> da1135dd26616c37242b47b6f7d8444425dec363
      </el-icon>
      <el-button round type="warning" @click="$router.push('/login')">Login</el-button>
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