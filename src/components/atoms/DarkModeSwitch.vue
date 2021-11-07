<template>
  <button 
    @click="darkModeEnabled = !darkModeEnabled" 
    class="p-1 relative text-ab-gray hover:text-white dark:text-white" 
  >
    <Component 
      :is="darkModeEnabled ? MoonIcon : SunIcon"
      class="w-8 h-8 stroke-current" 
    />
  </button>
</template>

<script setup>
import { ref, watch } from 'vue'
import SunIcon from '../../assets/icons/sun.svg'
import MoonIcon from '../../assets/icons/moon.svg'

const darkModeEnabled = ref((localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)))

watch(darkModeEnabled, () => {
  if (darkModeEnabled.value) {
    document.querySelector('html').classList.add('dark')
    document.getElementById('app').classList.add('dark')
    localStorage.theme = 'dark'
  } else {
    document.querySelector('html').classList.remove('dark')
    document.getElementById('app').classList.remove('dark')
    localStorage.theme = 'light'
  }
})
</script>

<style scoped>
</style>
