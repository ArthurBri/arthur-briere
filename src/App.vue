<template>
  <div class="flex">
    <DarkModeSwitch class="hidden sm:flex md:flex lg:flex xl:flex"/>
    <Sidebar/>
    <div class="main-content max-h-screen max-w-full z-10">
      <div class="header flex sm:hidden md:hidden lg:hidden xl:hidden">
        <Header/>
      </div>
      <div
          class="body h-full pb-16 py-0 md:py-4 lg:py-8 px-0 sm:px-2 md:px-4 lg:px-6 lg:px-8 mt-12 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-0 overflow-auto">
        <Projects/>
        <Skills/>
        <Experiences/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Projects from './components/organisms/Projects.vue'
import Skills from './components/organisms/Skills.vue'
import Experiences from './components/organisms/Experiences.vue'
import Header from './components/organisms/Header.vue'
import Sidebar from './components/organisms/Sidebar.vue'
import DarkModeSwitch from "./components/atoms/DarkModeSwitch.vue";

import {onMounted} from 'vue'

export default {
  name: 'App',
  components: {
    DarkModeSwitch,
    Projects,
    Skills,
    Experiences,
    Header,
    Sidebar
  },
  setup() {
    onMounted(() => {
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.querySelector('html').classList.add('dark')
        document.getElementById('app').classList.add('dark')
      } else {
        document.querySelector('html').classList.remove('dark')
        document.getElementById('app').classList.remove('dark')
      }
    })
  }
}
</script>
F
<style lang="scss">
@import "src/index.scss";

#app {
  @apply bg-cover w-screen h-screen overflow-hidden;
  min-width: 320px;
  background-image: url('./assets/bg-white.svg');

  &.dark {
    background-image: url('./assets/bg-white.svg');
  }
}

@media (min-width: 640px) {
  .main-content {
    width: calc(100vw - #{$sidebar-width});
  }
}

</style>
