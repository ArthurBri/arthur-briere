<template>
  <div class="card">
    <Icon class="w-4 h-4" :kind="skill.name" />
    <span class="font-semibold">{{ skill.label }}</span>
    <div class="flex" v-if="skill.stars">
      <div v-for="index in Math.floor(skill.stars)" :key="index">
        <Icon kind="star" />
      </div>
      <Icon kind="star-half" v-if="skill.stars % 1 !== 0" />
    </div>
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
  @apply flex flex-shrink gap-2 items-center bg-white rounded-lg select-none py-1 px-2 dark:bg-ab-primary bg-opacity-75 whitespace-nowrap backdrop-blur-sm backdrop-saturate-150 shadow-ab;
}

.icon-star,
.icon-star-half {
  @apply fill-current dark:text-white text-ab-primary;
}
</style>
