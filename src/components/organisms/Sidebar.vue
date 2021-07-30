<template>
  <div
      class="sidebar justify-between items-stretch hidden shadow-lg hidden sm:flex flex-col justify-between items-start bg-gradient-to-b dark:from-gray-800 from-white via-white to-transparent p-4">
    <div class="sidebar-start flex-1 flex-col mt-2">
      <div class="flex justify-center">
        <img class="rounded-xl transition duration-500 ease-in-out transform hover:scale-105 shadow-xl"
             style="height:120px;"
             src="../../assets/profile-pic.jpg" alt="Arthur Brière portrait"/>
        <div class="flex flex-col justify-center items-start ml-4 pr-2">
          <div class="text-2xl leading-tight font-bold text-ab-primary animate-scale">Arthur Brière</div>
          <div class="flex items-center animate-scale">
            <p class="text-xl dark:text-gray-200">Développeur JS</p>
          </div>
          <div class="links flex stroke-current">
            <svg xmlns="http://www.w3.org/2000/svg"
                 @click="actions.openUrl('https://www.linkedin.com/in/arthur-brière/')"
                 class="icon icon-tabler icon-tabler-brand-linkedin cursor-pointer animate-scale stroke-current"
                 width="30" height="30"
                 viewBox="0 0 24 24" stroke-width="1" stroke="#2c3e50" fill="none"
                 stroke-linecap="round"
                 stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <rect x="4" y="4" width="16" height="16" rx="2"/>
              <line x1="8" y1="11" x2="8" y2="16"/>
              <line x1="8" y1="8" x2="8" y2="8.01"/>
              <line x1="12" y1="16" x2="12" y2="11"/>
              <path d="M16 16v-3a2 2 0 0 0 -4 0"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" @click="actions.call()"
                 class="icon icon-tabler icon-tabler-phone-call ml-2 cursor-pointer animate-scale stroke-current"
                 width="30" height="30"
                 viewBox="0 0 24 24" stroke-width="1" stroke="#2c3e50" fill="none"
                 stroke-linecap="round"
                 stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path
                  d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"/>
              <path d="M15 7a2 2 0 0 1 2 2"/>
              <path d="M15 3a6 6 0 0 1 6 6"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" @click="actions.email()"
                 class="icon icon-tabler icon-tabler-mail ml-2 cursor-pointer animate-scale stroke-current"
                 width="30"
                 height="30"
                 viewBox="0 0 24 24" stroke-width="1" stroke="#2c3e50" fill="none"
                 stroke-linecap="round"
                 stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <rect x="3" y="5" width="18" height="14" rx="2"/>
              <polyline points="3 7 12 13 21 7"/>
            </svg>
          </div>
        </div>
      </div>
      <div class="text-base px-4 mt-4">
        <p class="text-center"><span class="animate-text">Ingénieur d'études</span>, {{ age() }} ans</p>
        <div class="text-center flex justify-center">
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
    <div class="sidebar-middle my-4 overflow-y-auto overflow-x-hidden flex flex-col h-full justify-between">
      <div>
        <p class="leading-loose text-justify px-2 mb-2 z-10" v-html="presentation"/>
        <div class="flex flex-wrap text-white justify-between overflow-hidden">
          <div class="flex w-full items-center justify-center">
            <span class="text-xl text-teal-300">Ces mots me parlent...</span>
          </div>
          <div class="text-xl ml-3" v-for="value in values ">
            {{ value.name }}
          </div>
        </div>
      </div>
    </div>
    <div class="sidebar-end text-gray-300 text-sm px-4">
      Développé en Vue.js, TypeScript, et TailwindCSS
    </div>
  </div>
</template>

<script lang="ts">
import { presentation, values } from "../../data"
import { onMounted, onUnmounted } from "vue"
import actions from "../../utils/actions"
import { age } from "../../utils/infos"

const animateButton = (e: Event) => {
  e.preventDefault();
  (e.target as HTMLDivElement).classList.remove('animate');

  (e.target as HTMLDivElement).classList.add('animate')
  setTimeout(() => (e.target as HTMLDivElement).classList.remove('animate'), 700)
};

export default {
  name: "Sidebar",
  setup() {
    onMounted(() => {
      const elements = document?.getElementsByClassName("animate-text");
      Array.from(elements).forEach(element => {
        element.addEventListener('mouseover', animateButton, false);
      })
    })

    onUnmounted(() => {
      const elements = document?.getElementsByClassName("animate-text");
      Array.from(elements).forEach(element => {
        element.removeEventListener('mouseover', animateButton, false);
      })
    })

    return { values, presentation, actions, age }
  }
}
</script>

<style lang="scss">
@import "src/index.scss";

.sidebar {
  @apply mx-4 my-8 rounded-xl;
  backdrop-filter: blur(5px);
  width: $sidebar-width;
  max-height: calc(100vh - 4rem);
}

.animate-text {
  @apply text-white;
}
</style>
