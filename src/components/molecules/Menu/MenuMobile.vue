<template>
  <button class="menu-switcher fixed right-2 top-2 p-2 z-50" @click="isOpened = !isOpened" aria-label="open menu">
    <svg
      v-if="!isOpened"
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-menu w-6 h-6"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="#2c3e50"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <line x1="4" y1="8" x2="20" y2="8" />
      <line x1="4" y1="16" x2="20" y2="16" />
    </svg>
    <svg
      v-if="isOpened"
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-x h-6 w-6"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="#2c3e50"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  </button>
  <div v-if="isOpened" class="menu fixed z-40 h-screen w-screen top-0 left-0 bg-gray-100 dark:bg-ab-gray flex items-center justify-center">
    <ul class="flex flex-col gap-4 items-center justify-center text-2xl" @click="isOpened = !isOpened">
      <li class="filter-item"><a href="#intro">Présentation</a></li>
      <li class="filter-item"><a href="#projects">Projets</a></li>
      <li class="filter-item"><a href="#skills">Compétences</a></li>
      <li class="filter-item"><a href="#experiences">Expériences</a></li>
    </ul>
    <div class="z-50 absolute bottom-12 right-1/2 translate-x-1/2">
      <DarkModeSwitch />
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import DarkModeSwitch from '../../atoms/DarkModeSwitch.vue'

const isOpened = ref(false)

watch(isOpened, () => {
  if (isOpened.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'visible'
  }
})
</script>

<style lang="scss" scoped>
.menu {
  height: -webkit-fill-available;
}
</style>
