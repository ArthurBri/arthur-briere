<template>
  <div class="flex flex-col mb-48">
    <Landing />
    <MouseTracker />
    <Values-Wall />
    <div class="hidden lg:block lg:fixed z-50 right-2 top-2">
      <DarkModeSwitch />
    </div>
    <Menu />
    <Contact />
    <div class="main-content max-w-full flex justify-center">
      <div
        class="w-4/5 flex flex-col gap-12 lg:gap-32 pb-16 py-0 md:py-4 lg:py-8 px-0 sm:px-2 md:px-4 lg:px-8 mt-12 sm:mt-0 overflow-visible"
      >
        <Projects />
        <Skills />
        <Experiences />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue'
import { projects } from './data'

import Projects from './components/organisms/Projects.vue'
import Skills from './components/organisms/Skills.vue'
import Experiences from './components/organisms/Experiences.vue'
import Contact from './components/molecules/Contact.vue'
import Menu from './components/molecules/Menu/index.vue'
import DarkModeSwitch from './components/atoms/DarkModeSwitch.vue'
import Landing from './components/organisms/Landing.vue'
import ValuesWall from './components/organisms/Introduction.vue'
import Section from './components/organisms/Section.vue'
import ProjectCard from './components/molecules/ProjectCard.vue'
import MouseTracker from './components/atoms/MouseTracker.vue'

onMounted(() => {
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.querySelector('html')?.classList.add('dark')
    document.getElementById('app')?.classList.add('dark')
  } else {
    document.querySelector('html')?.classList.remove('dark')
    document.getElementById('app')?.classList.remove('dark')
  }
})

const projectYearFilter = ref(null)
const filteredProjects = computed(() =>
  projectYearFilter.value ? projects.filter((project) => project.creationYear === projectYearFilter.value) : projects
)

const projectYears = computed(() => [...new Set(projects.map((project) => project.creationYear))])
</script>

<style lang="scss" scoped>
@import 'src/index.scss';
</style>
