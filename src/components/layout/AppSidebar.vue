<template>
  <el-icon @click="drawer = true" class="lg:hidden! cursor-pointer hover:opacity-75 transition-opacity duration-150">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
      <path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"/>
    </svg>
  </el-icon>
  <el-drawer v-model="drawer" direction="ltr" size="240px">
    <el-scrollbar>
      <div class="flex items-center px-5 py-2 gap-3 sm:gap-5">
        <lang-select></lang-select>
        <el-icon @click="toggleTheme()" class="cursor-pointer hover:opacity-75 transition-opacity duration-150">
          <Sunny color="#303133" v-if="currentTheme !== 'dark'" />
          <Moon color="#303133" v-else />
        </el-icon>
      </div>
      <el-menu
        :default-active="activeIndex"
        mode="vertical"
        class="border-none! app-sidebar"
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
    </el-scrollbar>
  </el-drawer>
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
const drawer = ref(false)
</script>