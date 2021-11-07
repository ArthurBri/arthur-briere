<template>
  <Section title="Projets" id="projects">
    <template v-slot:description>
      <ul class="flex relative overflow-auto mt-2 gap-2">
        <li @click="projectYearFilter = null" :class="{ selected: !projectYearFilter }" class="relative filter-item cursor-pointer">
          Tous
        </li>
        <li
          v-for="year in projectYears"
          :key="year"
          @click="projectYearFilter = year"
          :class="{ selected: projectYearFilter === year }"
          class="relative filter-item cursor-pointer"
        >
          {{ year }}
        </li>
      </ul>
      <div class="text-left my-4">
        J'aime passer du temps à réfléchir et à développer des projets en parallèle de mon job principal. J'en présente ici quelques un, les
        plus aboutis et/ou fonctionnels.
      </div>
      <div class="text-left">
        Bien que ce sont généralement des petits / moyens projets, je travaille au quotidien sur des moyens à gros projets, utilisant des
        infrastructures plus complètes et complexes.
      </div>
    </template>
    <template v-slot:items>
      <transition-group
        name="projects-transition"
        tag="div"
        class="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 px-2 justify-center content-start gap-8"
      >
        <ProjectCard v-for="project in filteredProjects" :key="project.name" :project="project" />
      </transition-group>
    </template>
  </Section>
</template>

<script setup>
import { computed, ref } from 'vue'
import ProjectCard from '../molecules/ProjectCard.vue'
import Section from '../organisms/Section.vue'
import { projects } from '../../data'

const projectYearFilter = ref(null)
const filteredProjects = computed(() => projectYearFilter.value
    ? projects.filter((project) => [project.creationYear, project.updateYear].includes(projectYearFilter.value))
    : projects
)

const projectYears = computed(() => [...new Set(projects.flatMap((project) => (project.creationYear ? [project.creationYear] : [])))])
</script>

<style scoped lang="scss">
.projects {
  @apply flex;
  animation: fadeIn 1000ms ease-in;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateX(-5rem);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.projects-transition-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.projects-transition-leave-active {
  transition: all 300ms ease;
  position: absolute;
  z-index: -10;
  opacity: 0;
  width: 300px;
  height: 300px;
}
</style>
