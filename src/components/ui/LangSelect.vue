<template>
  <div class="w-5 h-3 cursor-pointer overflow-hidden rounded-xs">
    <img :src="flag" class="h-full object-cover" alt="uz">
  </div>
</template>

<script setup>
import { ref } from 'vue'

const flag = ref('/uz-flag.svg')
const lang = [
  {
    value: 'uz',
    flag: '/uz-flag.svg',
  },
  {
    value: 'en',
    flag: '/uk-flag.svg',
  },
  {
    value: 'ru',
    flag: '/ru-flag.svg',
  },
  {
    value: 'ja',
    flag: '/ja-flag.svg',
  }
]

</script>