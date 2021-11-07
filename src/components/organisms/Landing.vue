<template>
  <Butterfly animationSpeed="2s" class="h-screen">
    <template v-slot:top-left>
      <div class="flex justify-center items-center w-full h-full">
        <h1 class="text-6xl">Arthur</h1>
      </div>
    </template>
    <template v-slot:top-right>
      <div class="flex justify-center items-center w-full h-full">
        <h1 class="text-6xl">Brière</h1>
      </div>
    </template>
    <template v-slot:bottom-left>
      <div class="flex flex-col justify-center items-center w-full h-full">
        <div class="text-xl">Développeur web</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-seeding stroke-current text-ab-primary"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 10a6 6 0 0 0 -6 -6h-3v2a6 6 0 0 0 6 6h3" />
          <path d="M12 14a6 6 0 0 1 6 -6h3v1a6 6 0 0 1 -6 6h-3" />
          <line x1="12" y1="20" x2="12" y2="10" />
        </svg>
        <div class="flex items-center justify-center gap-2 m-2">
          <Icon kind="map-pin" class="text-white w-8 h-8" />
          <span>Rennes,</span><span>France</span>
        </div>
      </div>
    </template>
    <template v-slot:bottom-right>
      <img src="../../assets/profile-pic.jpeg" alt="Arthur Brière portrait" class="w-full" />
    </template>
  </Butterfly>
  <button class="scroll-for-more" @click="scrollToNext">
    <Icon kind="chevrons-down" />
  </button>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Icon from '../atoms/Icon.vue'
import Butterfly from '../molecules/Butterfly.vue'

const scrollToNext = () => {
  window.scrollTo({
    top: window.innerHeight,
    behavior: 'smooth',
  })
}
</script>

<style>
.scroll-for-more {
  @apply absolute -translate-x-1/2 left-1/2 bottom-4 stroke-current dark:text-white z-20;
  animation: bouncing 2000ms ease-in-out infinite;
}

@keyframes bouncing {
  0% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(-1rem);
  }
  100% {
    transform: translateX(-50%) translateY(0);
  }
}
</style>
