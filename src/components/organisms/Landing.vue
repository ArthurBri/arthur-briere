<template>
  <div class="butterfly-wrapper flex justify-center mt-20 lg:mt-0 lg:items-center w-screen h-screen">
    <Butterfly animationSpeed="2s" class="h-2/4 w-4/5 lg:w-2/5 20">
      <template v-slot:top-left>
        <div class="flex justify-center items-center w-full h-full">
          <h1 class="text-3xl lg:text-7xl">Arthur</h1>
        </div>
      </template>
      <template v-slot:top-right>
        <div class="flex justify-center items-center w-full h-full">
          <h1 class="text-3xl lg:text-7xl">Brière</h1>
        </div>
      </template>
      <template v-slot:bottom-left>
        <div class="flex flex-col justify-center items-center w-full h-full p-2 pt-4">
          <div class="flex flex-col lg:gap-2 items-center">
            <span class="lg:text-xl">Développeur web</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-seeding stroke-current text-ab-primary w-6 h-6 lg:w-8 lg:h-8 hidden lg:flex"
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
          </div>
          <div class="flex items-center justify-center gap-1 lg:gap-2 m-2 text-xs lg:text-base">
            <Icon kind="map-pin" class="text-white stroke-current w-4 h-4 lg:w-8 lg:h-8" />
            <span>Rennes</span>
            <span class="hidden lg:block">France</span>
          </div>
        </div>
      </template>
      <template v-slot:bottom-right>
        <img :src="ProfilePic" alt="Arthur Brière portrait" class="w-full h-full bg-cover" />
      </template>
    </Butterfly>
  </div>
  <button class="scroll-for-more" @click="scrollToNext" aria-label="scroll to next">
    <Icon kind="chevrons-down" />
  </button>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Icon from '../atoms/Icon.vue'
import Butterfly from '../molecules/Butterfly.vue'
import ProfilePic from '../../assets/profile-pic.jpeg?webp'

const scrollToNext = () => {
  window.scrollTo({
    top: window.innerHeight,
    behavior: 'smooth',
  })
}
</script>

<style>
.scroll-for-more {
  @apply absolute flex justify-center -translate-x-1/2 left-1/2 bottom-20 lg:bottom-4 stroke-current z-20 w-12;
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
