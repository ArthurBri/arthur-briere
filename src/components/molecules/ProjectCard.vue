<template>
  <div class="relative transform hover:scale-105 transition duration-500">
    <div
        class="card-mask flex justify-center items-center mask transition duration-500 ease-in-out absolute rounded-lg z-20 p-0 opacity-0 hover:opacity-95 bg-ab-primary w-full h-full">
      <svg v-if="project.url" @click="handleUrl(project.url)" xmlns="http://www.w3.org/2000/svg"
           class="icon icon-tabler icon-tabler-link cursor-pointer stroke-current text-white hover:text-gray-300 mx-3"
           width="28" height="28" viewBox="0 0 24 24" stroke-width="2" stroke="" fill="none" stroke-linecap="round"
           stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5"/>
        <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5"/>
      </svg>
      <svg v-if="project.pictures" xmlns="http://www.w3.org/2000/svg"
           class="icon icon-tabler icon-tabler-slideshow cursor-pointer stroke-current text-white hover:text-gray-300 mx-3"
           width="28" height="28" viewBox="0 0 24 24" stroke-width="2" stroke="#" fill="none" stroke-linecap="round"
           stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <line x1="15" y1="6" x2="15.01" y2="6"/>
        <rect x="3" y="3" width="18" height="14" rx="3"/>
        <path d="M3 13l4 -4a3 5 0 0 1 3 0l4 4"/>
        <path d="M13 12l2 -2a3 5 0 0 1 3 0l3 3"/>
        <line x1="8" y1="21" x2="8.01" y2="21"/>
        <line x1="12" y1="21" x2="12.01" y2="21"/>
        <line x1="16" y1="21" x2="16.01" y2="21"/>
      </svg>
      <div v-if="project.type !== 'public'" class="text-white text-lg">
        <div v-if="project.type === 'private'">Projet privé.</div>
        <div v-else-if="project.type === 'build'">Projet en construction.</div>
        <div v-else-if="project.type === 'here'">Vous y êtes ! :)</div>
        <div v-if="project.type !== 'here'">Démo sur demande :)</div>
      </div>
    </div>
    <div class="card p-4 flex h-full justify-between flex-col w-full rounded-lg hover:opacity-0">
      <div>
        <div class="card-header flex justify-between w-full items-start justify-between">
          <div class="font-bold text-left text-gray-800 dark:text-gray-200 text-2xl leading-tight">
            <div class="flex">
              <div>{{ project.name }}</div>
              <div class="ml-2" v-if="project.type === 'build'" title="En construction">👨‍💻</div>
            </div>
            <div class="font-bold text-sm">{{ project.year }}</div>
          </div>
          <div v-if="project.logo" class="w-1/3 h-full flex justify-start items-start">
            <div class="flex h-12 w-32 shadow bg-white rounded-lg p-2">
              <img class="block m-auto object-cover" style="max-height: 2rem;" :src="project.logo"
                   :alt="`${project.name} logo`">
            </div>
          </div>
        </div>
        <div class="card-body text-justify mt-2">
          {{ project.description }}
        </div>
      </div>
      <div class="card-footer">
        <div class="tags flex flex-wrap mt-2">
          <div class="text-xs bg-teal-300 shadow dark:text-black rounded-lg p-1 px-2 mr-2 mb-1"
               v-for="(tag, index) in project.tags" :key="index">
            {{ tag }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectCard.vue",
  props: {
    project: Object
  }
}
</script>

<style scoped>
.card {
  @apply bg-opacity-85 dark:bg-gray-800 bg-white;
  backdrop-filter: blur(5px);
  z-index: 1;
}
</style>
