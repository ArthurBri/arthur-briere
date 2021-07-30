<template>
  <div class="header fixed z-10 w-full flex items-center h-12 px-2 justify-between text-white">
    <div class="flex items-center" @click="handleMenuVisibility">
      <div class="burger-menu cursor-pointer">
        <svg :class="{'transform rotate-45': menuVisible}" xmlns="http://www.w3.org/2000/svg" class="absolute transition-transform duration-300 icon icon-tabler icon-tabler-dots-vertical stroke-current fill-current" width="28" height="28" viewBox="0 0 24 24" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <circle cx="12" cy="12" r="1" />
          <circle cx="12" cy="19" r="1" />
          <circle cx="12" cy="5" r="1" />
        </svg>
        <svg :class="{'transform -rotate-45': menuVisible}" xmlns="http://www.w3.org/2000/svg" class=" icon icon-tabler icon-tabler-dots-vertical stroke-current transition-transform duration-300 fill-current" width="28" height="28" viewBox="0 0 24 24" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <circle cx="12" cy="12" r="1" />
          <circle cx="12" cy="19" r="1" />
          <circle cx="12" cy="5" r="1" />
        </svg>
      </div>
      <div class="m-2 font-medium text-xl">Arthur Brière</div>
    </div>
    <div class="links flex items-center text-white">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg"
             @click="actions.openUrl('https://www.linkedin.com/in/arthur-brière/')"
             class="icon icon-tabler icon-tabler-brand-linkedin cursor-pointer animate-scale stroke-current"
             width="25" height="25"
             viewBox="0 0 24 24" stroke-width="1" stroke="#FFFFFF" fill="none"
             stroke-linecap="round"
             stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <rect x="4" y="4" width="16" height="16" rx="2"/>
          <line x1="8" y1="11" x2="8" y2="16"/>
          <line x1="8" y1="8" x2="8" y2="8.01"/>
          <line x1="12" y1="16" x2="12" y2="11"/>
          <path d="M16 16v-3a2 2 0 0 0 -4 0"/>
        </svg>
      </div>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" @click="actions.call()"
             class="icon icon-tabler icon-tabler-phone-call ml-2 cursor-pointer animate-scale stroke-current"
             width="25" height="25"
             viewBox="0 0 24 24" stroke-width="1" stroke="#FFFFFF" fill="none"
             stroke-linecap="round"
             stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path
              d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"/>
          <path d="M15 7a2 2 0 0 1 2 2"/>
          <path d="M15 3a6 6 0 0 1 6 6"/>
        </svg>
      </div>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" @click="actions.email()"
             class="icon icon-tabler icon-tabler-mail ml-2 cursor-pointer animate-scale stroke-current" width="25"
             height="25"
             viewBox="0 0 24 24" stroke-width="1" stroke="#FFFFFF" fill="none"
             stroke-linecap="round"
             stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <rect x="3" y="5" width="18" height="14" rx="2"/>
          <polyline points="3 7 12 13 21 7"/>
        </svg>
      </div>
      <DarkModeSwitch position="relative"/>
    </div>
  </div>
  <div class="menu" :class="menuVisible ? 'block': 'hidden'">
    <div class="flex justify-center items-center mt-8">
      <img class=" rounded-xl transition duration-500 ease-in-out transform hover:scale-105 shadow-lg h-24"
           src="../../assets/profile-pic.jpg" alt="Arthur Brière portrait"/>
      <div class="text-lg text-white px-4 h-full flex flex-col items-start justify-center">
        <p class="text-center text-white"><span class="animate-text">Ingénieur d'études</span></p>
        <p>{{ age() }} ans</p>
        <div class="text-center flex justify-center text-white">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-2 stroke-current"
               width="20" height="20" viewBox="0 0 24 24" stroke-width="1" stroke="#03A9F4" fill="none"
               stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <line x1="18" y1="6" x2="18" y2="6.01"/>
            <path d="M18 13l-3.5 -5a4 4 0 1 1 7 0l-3.5 5"/>
            <polyline points="10.5 4.75 9 4 3 7 3 20 9 17 15 20 21 17 21 15"/>
            <line x1="9" y1="4" x2="9" y2="17"/>
            <line x1="15" y1="15" x2="15" y2="20"/>
          </svg>
          <span class="ml-2">Rennes, France</span></div>
      </div>
    </div>
    <div class="text-gray-200">
      <div class="text-base text-justify px-4 mt-4">
        <p class="presentation leading-loose text-justify px-2 mb-2" v-html="presentation" />
      </div>
    </div>
    <div class="my-8">
      <span class="text-lg text-white font-semibold">Ces mots me parlent...</span>
      <div class="flex flex-wrap text-white justify-between px-4">
        <div class="text-lg ml-3" v-for="value in values ">
          {{ value.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DarkModeSwitch from "../atoms/DarkModeSwitch.vue"
import { values, presentation } from "../../data"
import actions from "../../utils/actions"
import { age } from "../../utils/infos"
import { ref } from 'vue'

export default {
  components: {DarkModeSwitch},
  name: "Header",
  setup () {
    const menuVisible = ref(false)
    const handleMenuVisibility = () => {
      menuVisible.value = !menuVisible.value
      document.body.style.overflow = menuVisible.value ? 'hidden' : 'visible'
    }
    return { actions, values, presentation, menuVisible, handleMenuVisibility, age }
  }
}
</script>

<style scoped>
.menu {
  @apply fixed w-full z-50 overflow-x-hidden overflow-y-scroll bg-ab-primary mt-12;
  backdrop-filter: blur(5px);
  height: calc(100vh - 3rem)
}

>>> .animate-text {
  color:white;
}

.header {
  min-width: 320px;
  backdrop-filter: blur(5px);
}
</style>
