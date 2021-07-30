<template>
  <div class="flex flex-col items-center content-center justify-between mt-12 mx-8 md:mx-4 m-4">
    <h1 class="relative font-semibold text-white leading-none mr-4">Expériences & Intérêts</h1>
    <div class="flex relative overflow-auto text-white mt-2">
      <span @click="filterType = ''" :class="{'selected': !filterType }"
            class="relative filter-item mr-4 cursor-pointer">Tous</span>
      <span @click="filterType = 'experience'" :class="{'selected' : filterType === 'experience' }"
            class="relative filter-item mr-4 cursor-pointer">Expériences</span>
      <span @click="filterType = 'interest'" :class="{'selected': filterType === 'interest' }"
            class="relative filter-item mr-4 cursor-pointer">Centres d'intérêt</span>
    </div>
  </div>
  <div class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 px-2 justify-center">
    <transition-group name="experiences">
      <ExperienceCard v-for="(experience, index) in filteredExperiences" :experience="experience" :key="index" />
    </transition-group>
  </div>
</template>

<script>
import { experiences } from '../../data'
import ExperienceCard  from "../molecules/ExperienceCard.vue"
import { defineComponent, ref, computed } from "vue"

export default defineComponent({
  name: 'Experiences',
  components: { ExperienceCard },
  setup() {
    const filterType = ref('')
    const filteredExperiences = computed(() => filterType.value
        ? experiences.filter(experience => experience.type === filterType.value)
        : experiences
    )
    return { filterType, filteredExperiences }
  }
})
</script>

<style>
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
