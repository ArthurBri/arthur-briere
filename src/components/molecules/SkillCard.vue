<template>
  <div class="card">
    <Icon class="w-4 h-4" :kind="skill.name" />
    <span class="font-semibold">{{ skill.label }}</span>
  </div>
</template>

<script setup>
import Icon from '../atoms/Icon.vue'

defineProps({
  skill: Object,
})
</script>

<style scoped>
.card {
  @apply flex flex-shrink gap-2 items-center bg-white rounded-full select-none py-1 px-2 dark:bg-ab-primary bg-opacity-75 whitespace-nowrap backdrop-blur-sm backdrop-saturate-150 shadow-ab;
}

.icon-star,
.icon-star-half {
  @apply fill-current dark:text-white text-ab-primary;
}
</style>
