<template>
  <div class="h-screen">
    <div class="flex flex-col justify-center items-center h-3/4">
      <div class="w-48 h-48 mb-8 rounded-full border-2 shadow-md overflow-hidden">
        <img :src="ProfilePic" alt="Arthur Brière portrait" class="w-full h-full bg-cover" />
      </div>
      <h1 class="text-3xl lg:text-7xl">Arthur Brière</h1>
      <div class="flex items-center content-center gap-2 my-4">
        <h4 class="lg:text-2xl">Développeur web</h4>
        <div class="flex lg:gap-2 items-center text-white bg-ab-primary p-2 rounded-full">
          <Icon kind="leaf" class="stroke-current w-4 h-4 lg:w-4 lg:h-4" />
          <div class="flex">
            <span>Engagé</span>
          </div>
        </div>
      </div>
      <ContactBlock />
    </div>
    <div class="flex flex-col items-center justify-center">
      <div class="flex items-center gap-1 lg:gap-2 m-2 text-xs lg:text-base bg-whit p-2 rounded-full">
        <Icon kind="map-pin" class="stroke-current w-4 h-4 lg:w-8 lg:h-8" />
        <div class="flex">
          <span>Rennes</span>
          <span class="hidden lg:block">- France</span>
        </div>
      </div>
    </div>
    <button
      class="animate-bounce absolute rounded-full -translate-x-1/2 left-1/2 bottom-16 stroke-current z-20 w-12 bg-white"
      @click="scrollToNext"
      aria-label="scroll to next"
    >
      <Icon kind="chevrons-down" />
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Icon from '../atoms/Icon.vue'
import ContactBlock from '../molecules/ContactBlock.vue'
import ProfilePic from '../../assets/profile-pic.jpeg?webp'

const scrollToNext = () => {
  window.scrollTo({
    top: window.innerHeight,
    behavior: 'smooth',
  })
}
</script>
