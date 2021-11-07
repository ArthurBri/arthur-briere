<template>
  <div class="links">
    <button @click="openUrl('https://www.linkedin.com/in/arthur-brière/')">
      <Icon kind="linkedin" as="div"/>
      <div>LinkedIn</div>
    </button>
    <button @click="call()">
      <Icon kind="phone" as="div"/>
      <div>Téléphone</div>
    </button>
    <button @click="email()">
      <Icon kind="email" as="div"/>
      <div>Email</div>
    </button>
    <button @click="email()">
      <Icon kind="news" as="div"/>
      <div>CV</div>
    </button>
  </div>
</template>

<script setup>
import { openUrl, call, email } from '../../utils/actions'
import Icon from '../atoms/Icon.vue'
</script>

<style lang="scss" scoped>
.links {
  @apply fixed shadow-lg bg-ab-primary bg-opacity-70 text-white flex left-0 top-0 lg:top-6 lg:left-6 lg:w-12 lg:flex-col overflow-hidden transition-all duration-500 backdrop-filter backdrop-blur-md backdrop-saturate-150 gap-1 p-2 z-20 rounded-2xl;

  &:hover {
    @apply lg:w-36;
  }
}

button {
  @apply pr-2 bg-transparent shadow-none;
  ::v-deep * > svg {
    @apply w-8 h-8 stroke-current p-1;
  }
}
</style>
