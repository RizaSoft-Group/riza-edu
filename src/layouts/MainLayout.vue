<template lang="html">
  <app-header></app-header>
  <app-homepage />
  <router-view></router-view>
  <app-footer />
</template>

<script setup>
import AppFooter from '@/components/layout/AppFooter.vue';
import AppHeader from '@/components/layout/AppHeader.vue'
import AppHomepage from '@/components/layout/AppHomepage.vue';
</script>

<style lang="css" scoped>

</style>