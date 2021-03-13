<template>
  <div class="card relative flex items-start rounded-lg shadow-lg mx-2">
    <div class="p-4 flex flex-col justify-between h-full">
      <div class="flex">
        <div class="w-full flex flex-col items-start justify-start">
          <div class="flex justify-start items-center">
            <span class="font-bold text-left text-2xl">{{ experience.name }}</span>
            <span class="font-bold text-sm ml-4">{{ experience.year }}</span>
          </div>
          <span class="text-justify">{{ experience.description }}</span>
        </div>
      </div>
      <div class="tags flex flex-wrap mt-2">
        <div class="text-xs bg-blue-300 shadow rounded-lg p-1 px-2 mr-2 mb-1 text-ab-gray"
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

</style>
