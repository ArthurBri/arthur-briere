<template>
  <div class="flex flex-col items-center justify-between mx-8 md:mx-4 m-4 mt-0">
    <h1 class="relative text-white font-semibold leading-none mt-4">
      Projets</h1>
    <div class="flex relative w-full justify-center items-center pb-4 md:pb-0">
      <ul class="flex relative overflow-auto text-white mt-2">
        <li @click="projectYearFilter = null" :class="{'selected': !projectYearFilter }"
            class="relative filter-item mx-2 cursor-pointer">Tous
        </li>
        <li v-for="year in projectYears"
            :key="year"
            @click="projectYearFilter = year"
            :class="{'selected': projectYearFilter === year }"
            class="relative filter-item mx-2 cursor-pointer">
          {{ year }}
        </li>
      </ul>
      <div
          class="absolute right-auto -bottom-1 md:bottom-0 md:right-0 flex text-xs md:text-xs lg:text-base text-white">
        👨‍💻 : en construction
      </div>
    </div>
  </div>
  <div class="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 px-2 justify-center">
    <ProjectCard v-for="(project, index) in filteredProjects" :key="index" :project="project"/>
  </div>
</template>

<script>
import { projects } from '../../data'
import ProjectCard from "../molecules/ProjectCard.vue"
import { computed, ref } from "vue"

export default {
  name: 'Projects',
  components: {ProjectCard},
  setup () {
    const projectYearFilter = ref(null)
    const filteredProjects = computed(() =>
        projectYearFilter.value
            ? projects.filter(project => project.year === projectYearFilter.value)
            : projects
    )

    const projectYears = computed(() => [...new Set(projects.map(project => project.year))])
    return { projectYearFilter, filteredProjects, projectYears }
  }
}
</script>

<style scoped>

.filter-item:after {
}

.filter-item:hover:after {
  @apply block bg-white rounded-full absolute;
  left: 0;
  content: "";
  height: 2px;
  width: 100%;
}

.filter-item.selected:after {
  @apply block bg-white rounded-full absolute;
  width: 100%;
  left: 0;
}
</style>
