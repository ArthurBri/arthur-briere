<template>
  <ul
    class="
      shadow-lg
      text-ab-primary
      bg-white
      dark:bg-ab-primary
      flex
      bottom-4
      lg:bottom-auto lg:top-6 lg:left-6
      overflow-hidden
      transition-all
      duration-500
      backdrop-filter backdrop-blur-md backdrop-saturate-150
      gap-1
      p-2
      z-20
      rounded-full
    "
  >
    <li>
      <button @click="openUrl('https://www.linkedin.com/in/arthur-brière/')" aria-label="linkedin">
        <Icon kind="linkedin" class="w-8 h-8" />
      </button>
    </li>
    <li>
      <button @click="call()" aria-label="call">
        <Icon kind="phone" class="w-4 h-4" />
      </button>
    </li>
    <li>
      <button @click="email()" aria-label="email">
        <Icon kind="email" class="w-4 h-4" />
      </button>
    </li>
    <li>
      <button @click="openCv()" aria-label="cv"><Icon kind="news" class="w-4 h-4" /></button>
    </li>
  </ul>
</template>

<script setup>
import { openUrl, call, email, openCv } from '../../utils/actions'
import Icon from '../atoms/Icon.vue'
</script>

<style lang="scss" scoped>
.links {
  .link-label {
    @apply hidden;
  }
}

button {
  :deep(svg) {
    @apply w-8 h-8 stroke-current p-1;
  }
}
</style>
