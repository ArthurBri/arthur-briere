<template>
  <ul class="links">
    <li>
      <button @click="openUrl('https://www.linkedin.com/in/arthur-brière/')" aria-label="linkedin">
        <Icon kind="linkedin" as="div" class="stroke-current text-white" />
        <div class="link-label">LinkedIn</div>
      </button>
    </li>
    <li>
      <button @click="call()" aria-label="call">
        <Icon kind="phone" as="div" class="stroke-current text-white" />
        <div class="link-label">Téléphone</div>
      </button>
    </li>
    <li>
      <button @click="email()" aria-label="email">
        <Icon kind="email" as="div" class="stroke-current text-white" />
        <div class="link-label">Email</div>
      </button>
    </li>
    <li>
      <button @click="openCv()" aria-label="cv">
        <Icon kind="news" as="div" class="stroke-current text-white" />
        <div class="link-label">CV</div>
      </button>
    </li>
  </ul>
</template>

<script setup>
import { openUrl, call, email, openCv} from '../../utils/actions'
import Icon from '../atoms/Icon.vue'
</script>

<style lang="scss" scoped>
.links {
  @apply fixed shadow-lg bg-ab-primary bg-opacity-70 text-white flex left-1/2 transform -translate-x-1/2 lg:translate-x-0 bottom-4 lg:bottom-auto lg:top-6 lg:left-6 lg:w-12 lg:flex-col overflow-hidden transition-all duration-500 backdrop-filter backdrop-blur-md backdrop-saturate-150 gap-1 p-2 z-20 rounded-2xl;

  &:hover {
    @apply lg:w-36;
  }

  .link-label {
    @apply hidden lg:block;
  }
}

button {
  @apply pr-2 bg-transparent dark:bg-transparent shadow-none hover:bg-ab-primary hover:text-white w-full;
  :deep(svg) {
    @apply w-8 h-8 stroke-current p-1;
  }
}
</style>
