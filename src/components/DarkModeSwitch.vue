<template>
  <div :class="position === 'relative' ? 'relative ml-4' : 'absolute top-2 right-4 z-50' ">
    <span class="toggle text-2xl" :class="{'active': darkModeEnabled}" @click="darkModeEnabled = !darkModeEnabled"/>
  </div>
</template>

<script>
import {onMounted, ref, watch} from 'vue'

export default {
  name: "DarkModeSwitch",
  props: {
    position: {
      type: String,
      default: 'absolute'
    }
  },
  setup () {
    let darkModeEnabled = ref((localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)))

    watch(darkModeEnabled, () => {
      if (darkModeEnabled.value) {
        document.querySelector('html').classList.add('dark')
        localStorage.theme = 'dark'
      } else {
        document.querySelector('html').classList.remove('dark')
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
