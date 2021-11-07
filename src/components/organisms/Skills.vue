<template>
  <Section title="Compétences" order="reverse" id="skills">
    <template v-slot:description>
      <ul class="flex relative overflow-auto mt-2">
        <li
          v-for="skillType in skillsTypes"
          :key="skillType.label"
          @click="skillsTypeFilter = skillType.value"
          :class="{ selected: skillsTypeFilter === skillType.value }"
          class="relative filter-item mr-4 cursor-pointer"
        >
          {{ skillType.label }}
        </li>
      </ul>
      <div class="text-left my-4">
        Il y en a pour tous les goûts. Je ne me limite pas à la technique, je considère que l'état d'esprit et les valeurs sont tous aussi
        importants dans un projet.
      </div>
    </template>
    <template v-slot:items>
      <transition-group name="skills-transition" tag="div" class="flex flex-wrap justify-evenly content-start gap-4">
        <SkillCard v-for="skill in filteredSKills" :skill="skill" :key="skill.name" />
      </transition-group>
    </template>
  </Section>
</template>

<script setup>
import SkillCard from '../molecules/SkillCard.vue'
import Section from '../organisms/Section.vue'
import { skills } from '../../data'
import { ref, computed } from 'vue'

const skillsTypes = [
  { value: 'project', label: 'Projects' },
  { value: 'human', label: 'Humaines' },
  { value: 'technical', label: 'Techniques' },
  { value: null, label: 'Toutes' },
]

const skillsTypeFilter = ref(null)
const filteredSKills = computed(() =>
  skillsTypeFilter.value ? skills.filter((skill) => skill.type === skillsTypeFilter.value).sort(() => 0.5 - Math.random()) : skills
)
</script>

<style scoped lang="scss">
.skills {
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

.skills-transition-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.skills-transition-leave-active {
  transition: all 300ms ease;
  position: absolute;
  z-index: -10;
  opacity: 0;
  width: 6rem;
  height: 3rem;
}
</style>
