<template>
  <div class="cursor-pointer " :class="position === 'relative' ? 'relative ml-4' : 'absolute top-2 right-4 z-50' ">
    <span class="toggle text-2xl w-6 h-6" :class="{'active': darkModeEnabled}"
          @click="darkModeEnabled = !darkModeEnabled"/>
  </div>
</template>

<script>
import { ref, watch } from 'vue'

export default {
  name: "DarkModeSwitch",
  props: {
    position: {
      type: String,
      default: 'absolute'
    }
  },
  setup() {
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
    return { darkModeEnabled }
  }
}
</script>

<style scoped>
.toggle:before {
  content: '☀️';
}

.toggle.active:before {
  content: '🌒';
}
</style>
