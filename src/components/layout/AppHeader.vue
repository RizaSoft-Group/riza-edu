<template>
  <div class="container mx-auto flex justify-between items-center">
    <router-link to="/">
      <img src="/logo.svg" alt="Brand Logo" />
    </router-link>
    <el-menu
      :default-active="activeIndex"
      mode="horizontal"
      class="border-none! app-menu"
      :ellipsis="false"
      @select="handleSelect"
    >
      <el-menu-item index="0">Home</el-menu-item>
      <el-menu-item index="1">Courses</el-menu-item>
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
    <div class="flex items-center gap-5">
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