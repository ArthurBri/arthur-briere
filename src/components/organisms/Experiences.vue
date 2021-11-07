<template>
  <Section title="Experiences" id="experiences">
    <template v-slot:description>
      <ul class="flex relative overflow-auto mt-2 whitespace-nowrap">
        <li @click="filterType = ''" :class="{ selected: !filterType }" class="relative filter-item mr-4 cursor-pointer">Tous</li>
        <li
          @click="filterType = 'experience'"
          :class="{ selected: filterType === 'experience' }"
          class="relative filter-item mr-4 cursor-pointer"
        >
          Expériences
        </li>
        <li
          @click="filterType = 'interest'"
          :class="{ selected: filterType === 'interest' }"
          class="relative filter-item mr-4 cursor-pointer"
        >
          Centres d'intérêt
        </li>
      </ul>
    </template>
    <template v-slot:items>
      <transition-group
        name="experiences-transition"
        tag="div"
        class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 px-2 justify-center"
      >
        <ExperienceCard v-for="experience in filteredExperiences" :experience="experience" :key="experience.name" />
      </transition-group>
    </template>
  </Section>
</template>

<script setup>
import { experiences } from '../../data'
import ExperienceCard from '../molecules/ExperienceCard.vue'
import Section from '../organisms/Section.vue'
import { defineComponent, ref, computed } from 'vue'

const filterType = ref('')
const filteredExperiences = computed(() =>
  filterType.value ? experiences.filter((experience) => experience.type === filterType.value) : experiences
)
</script>

<style lang="scss">
.experiences {
  @apply flex;
  animation: fadeIn 1000ms ease-in;
}

.experiences-transition-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.experiences-transition-leave-active {
  transition: all 300ms ease;
  position: absolute;
  z-index: -10;
  opacity: 0;
  width: 300px;
  height: 300px;
}
</style>
