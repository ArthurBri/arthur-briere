<template>
  <div class="project-card">
    <div class="project-card-overlay">
      <a v-if="project.repo" :href="project.repo" target="_blank">
        <Icon kind="github" as="i" />
      </a>
      <a v-else-if="project.url" :href="project.url" target="_blank">
        <Icon kind="external-link" as="i" />
      </a>
      <div class="flex items-center" v-else-if="project.status === 'build'" title="En construction">
        <span>Je travaille dessus</span>
        <span class="text-4xl ml-2">👨‍💻</span>
      </div>
      <p class="text-xs" v-else>Projet d'entraînement, non déployé, mais on pourra en parler ;)</p>
    </div>
    <div class="card p-4 flex h-full justify-between flex-col w-full rounded-lg">
      <div>
        <div class="card-header flex justify-between w-full items-start">
          <div class="font-bold text-left text-gray-800 dark:text-gray-200 text-2xl leading-tight">
            <div class="card-title flex">
              <div>{{ project.name }}</div>
            </div>
            <div class="flex gap-2">
              <div class="font-bold text-sm" v-if="!project.updateYear">{{ project.creationYear }}</div>
              <div class="font-bold text-sm text-ab-primary dark:text-ab-gray">{{ project.updateYear }}</div>
            </div>
          </div>
          <div v-if="project.logo" class="card-logo w-1/3 h-full flex justify-end">
            <div class="flex h-12 w-32 shadow-ab bg-white rounded-lg p-2">
              <img class="block m-auto object-cover" style="max-height: 2rem" :src="project.logo" :alt="`${project.name} logo`" />
            </div>
          </div>
        </div>
        <div class="card-body text-justify mt-2">
          {{ project.description }}
        </div>
      </div>
      <div class="card-footer">
        <div class="tags flex flex-wrap mt-2 gap-2">
          <div
            class="flex text-xs bg-ab-primary bg-opacity-10 dark:bg-white dark:text-ab-gray rounded-md p-1 px-1 whitespace-nowrap"
            v-for="tag in tagNames"
            :key="tag.name"
          >
            <Icon class="w-4 h-4 mr-1" :kind="tag.name" />
            {{ tag.label }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { openUrl } from '../../utils/actions'
import Icon from '../atoms/Icon.vue'
import { skills } from '../../data'

const props = defineProps({
  project: Object,
})

const findTagName = (tag) => skills.find((skill) => skill.label === tag)?.name || tag
const tagNames = props.project?.tags.map((tag) => ({ name: findTagName(tag), label: tag }))
</script>

<style scoped lang="scss">
.project-card {
  @apply hover:scale-110 transform transition bg-white dark:bg-ab-primary rounded-md relative flex flex-col bg-opacity-75 backdrop-blur-sm backdrop-saturate-150 shadow-ab z-10 overflow-hidden;

  &:hover {
    .project-card-overlay {
      @apply opacity-100;
    }
  }
}

.project-card-overlay {
  @apply absolute flex text-white m-4 p-2 items-center justify-center left-0 bottom-0 rounded-md right-0 h-16 bg-ab-primary bg-opacity-80 backdrop-blur-lg backdrop-saturate-200 opacity-0 transition-opacity;

  a {
    @apply hover:scale-110 transition-transform;
  }

  > a + a {
    @apply ml-8;
  }
}

i ::v-deep(svg) {
  @apply text-white stroke-current stroke-1 w-8 h-8;
}
</style>
