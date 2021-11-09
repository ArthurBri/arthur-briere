<template>
  <template class="hidden lg:flex">
    <menu-desktop />
  </template>
  <template class="flex lg:hidden">
    <menu-mobile />
  </template>
</template>

<script setup>
import MenuDesktop from './MenuDesktop.vue'
import MenuMobile from './MenuMobile.vue'
</script>
