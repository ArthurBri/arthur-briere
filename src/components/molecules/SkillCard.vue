<template>
  <div class="card flex items-center bg-white rounded-lg shadow-lg transform transition-all duration-500 hover:-translate-y-1 mx-2 mb-2 p-2 dark:bg-gray-800">
    <div class="flex items-center justify-center">
      <span class="font-semibold">{{ skill.name }}</span>
      <div class="flex ml-4" v-if="skill.stars">
        <div class="text-left" v-for="index in Math.floor(skill.stars)" :key="index">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-star" width="20"
               height="20" viewBox="0 0 24 24" stroke-width="1" stroke="#009688" fill="#009688"
               stroke-linecap="round" stroke-linejoin="round">
            <path fill="none" stroke="none" d="M0 0h24v24H0z"/>
            <path
                d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"/>
          </svg>
        </div>
        <div v-if="skill.stars % 1 !== 0">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-star-half" width="20"
               height="20" viewBox="0 0 24 24" stroke-width="1" stroke="#009688" fill="#009688" stroke-linecap="round"
               stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253z"/>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkillCard",
  props: {
    skill: Object
  }
}
</script>

<style scoped>
.card {
  @apply bg-opacity-75 dark:bg-gray-800;
  backdrop-filter: blur(5px);
  z-index: 1;
}
</style>
