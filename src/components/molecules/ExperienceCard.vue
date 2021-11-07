<template>
  <div class="card">
    <div class="flex">
      <div class="flex flex-col">
        <div class="flex items-center font-bold">
          <span class="text-left text-2xl">{{ experience.name }}</span>
          <span class="text-sm ml-4">{{ experience.year }}</span>
        </div>
        <span class="text-justify">{{ experience.description }}</span>
      </div>
    </div>
    <div class="tags">
      <div class="tag" v-for="tag in experience.tags" :key="tag">
        {{ tag }}
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  experience: Object,
})
</script>

<style lang="scss" scoped>
.card {
  @apply transform transition p-4 flex flex-col justify-between h-full relative rounded-lg shadow-ab bg-opacity-85 dark:bg-ab-primary bg-white backdrop-blur-sm backdrop-saturate-150 z-10;
}

.tags {
  @apply flex flex-wrap mt-2;
}

.tag {
  @apply text-xs transition dark:bg-white bg-ab-gray bg-opacity-10 text-ab-gray rounded-md py-1 px-2 mr-2 mb-1;
}
</style>
