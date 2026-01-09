<template>
  <div class="container px-5 mx-auto flex justify-between gap-3 items-center h-15">
    <el-icon class="lg:hidden! cursor-pointer hover:opacity-75 transition-opacity duration-150">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
        <path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"/>
      </svg>
    </el-icon>
    <router-link to="/" class="mr-auto">
      <img src="/logo.svg" alt="Brand Logo" />
    </router-link>
    <el-menu
      :default-active="activeIndex"
      mode="horizontal"
      class="border-none! app-menu lg:flex! hidden!"
      :ellipsis="false"
      @select="handleSelect"
    >
      <el-menu-item index="0"><router-link to="/">Home</router-link></el-menu-item>
      <el-menu-item index="1"><router-link to="/course">Courses</router-link></el-menu-item>
      <el-menu-item index="2">Blog</el-menu-item>
      <el-sub-menu index="3">
        <template #title>Page</template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-sub-menu index="2-4">
          <template #title>item four</template>
          <el-menu-item index="2-4-1">item one</el-menu-item>
          <el-menu-item index="2-4-2">item two</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="4">LearnPress Add-On</el-menu-item>
      <el-menu-item index="5">Premium Theme</el-menu-item>
    </el-menu>
    <div class="flex items-center gap-3 sm:gap-5">
      <el-icon @click="toggleTheme()" class="cursor-pointer hover:opacity-75 transition-opacity duration-150">
        <Sunny color="#303133" v-if="currentTheme !== 'dark'" />
        <Moon color="#303133" v-else />
      </el-icon>
      <lang-select></lang-select>
      <el-icon
        class="cursor-pointer hover:text-[#E6A23C]! transition-colors duration-300"
        color="#303133"
      >
        <Search />
      </el-icon>
      <router-link to="/login">
        <el-button round type="warning">Login</el-button>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
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

<style>
.el-menu--horizontal .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
  color: #E6A23C !important;
  background-color: #F5F5F5 !important;
}

.el-menu--horizontal .el-menu-item.is-active,
.el-menu--horizontal .el-sub-menu.is-active {
  --el-menu-active-color: #E6A23C !important;
  border-color: var(--el-menu-active-color) !important;
}

.el-menu--horizontal .el-sub-menu:hover .el-sub-menu__title {
  --el-menu-hover-text-color: #E6A23C !important;
}
</style>