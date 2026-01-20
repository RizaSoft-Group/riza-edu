<template lang="html">
  <div class="flex flex-col justify-between min-h-screen">
    <app-header></app-header>
    <div class="flex-1">
      <router-view></router-view>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script setup>
import AppFooter from '@/components/layout/AppFooter.vue';
import AppHeader from '@/components/layout/AppHeader.vue'
</script>