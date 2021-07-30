<template>
  <div class="flex flex-col items-center content-center justify-between mt-12 mx-8 md:mx-4 m-4">
    <h1 class="relative font-semibold text-white leading-none mr-4">Compétences</h1>
    <div class="flex relative overflow-auto text-white mt-2">
      <span @click="skillsTypeFilter = null" :class="{'selected': !skillsTypeFilter }"
            class="relative filter-item mr-4 cursor-pointer">Toutes</span>
      <span @click="skillsTypeFilter = 'technical'" :class="{'selected': skillsTypeFilter === 'technical' }"
            class="relative filter-item mr-4 cursor-pointer">Techniques</span>
      <span @click="skillsTypeFilter = 'human'" :class="{'selected': skillsTypeFilter === 'human' }"
            class="relative filter-item mr-4 cursor-pointer">Humaines</span>
      <span @click="skillsTypeFilter = 'project'" :class="{'selected': skillsTypeFilter === 'project' }"
            class="relative filter-item mr-4 cursor-pointer">Projet</span>
    </div>
  </div>
  <div class="flex justify-center flex-wrap">
    <SkillCard v-for="(skill, index) in filteredSKills" :skill="skill" :key="index" />
  </div>
</template>

<script>
import SkillCard from "../molecules/SkillCard.vue";
import { skills } from '../../data'
import { ref, computed } from 'vue'

export default {
  name: 'Projects',
  components: { SkillCard },
  setup () {
    const skillsTypeFilter = ref(null)
    const filteredSKills = computed(() =>
      skillsTypeFilter.value
        ? skills.filter(skill => skill.type === skillsTypeFilter.value).sort(() => 0.5 - Math.random())
        : skills.sort(() =>  0.5 - Math.random())
    )
    return { skillsTypeFilter, filteredSKills }
  }
}
</script>

<style scoped>
.filter-item:after {
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: "";
  display: block;
  height: 2px;
  left: 50%;
  position: absolute;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
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
