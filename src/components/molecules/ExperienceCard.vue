<template>
  <div class="card relative flex items-start rounded-lg shadow-lg">
    <div class="p-4 flex flex-col justify-between h-full">
      <div class="flex">
        <div class="w-full flex flex-col items-start justify-start">
          <div class="flex justify-start items-center font-bold">
            <span class="text-left text-2xl">{{ experience.name }}</span>
            <span class="text-sm ml-4">{{ experience.year }}</span>
          </div>
          <span class="text-justify">{{ experience.description }}</span>
        </div>
      </div>
      <div class="tags flex flex-wrap mt-2">
        <div class="text-xs bg-ab-gray text-white shadow rounded-lg py-1 px-2 mr-2 mb-1"
             v-for="tag in experience.tags">
          {{ tag }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExperienceCard",
  props: {
    experience: Object
  }
}
</script>

<style scoped>
.card {
  @apply bg-opacity-85 dark:bg-gray-800 bg-white;
}

</style>
