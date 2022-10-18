<template>
  <component v-if="isSvgIcon" :is="svgComponent" />
  <img v-else-if="isWebpIcon" :src="imgSource" :alt="kind" />
</template>

<script setup lang="ts">
import { onMounted, ref, h } from 'vue'

export interface IconProps {
  kind: String
}

const svgComponent = ref()
const imgSource = ref('')

const isSvgIcon = ref(false)
const isWebpIcon = ref(false)

const props = defineProps<IconProps>()

onMounted(async () => {
  const icons = import.meta.glob('../../assets/icons/*.{svg,webp}')
  isSvgIcon.value = icons[`../../assets/icons/${props.kind}.svg`]
  isWebpIcon.value = icons[`../../assets/icons/${props.kind}.webp`]

  if (!isSvgIcon.value && !isWebpIcon.value) {
    import.meta.env.DEV && console.log(`icon '${props.kind}' is missing from icon folder. Nothing is going to be rendered.`)
    return
  }

  if (isSvgIcon.value) {
    const currentIcon = await icons[`../../assets/icons/${props.kind}.svg`]()
    svgComponent.value = currentIcon.default
  } else if (isWebpIcon.value) {
    const currentIcon = await icons[`../../assets/icons/${props.kind}.webp`]()
    imgSource.value = currentIcon.default
  }
})
</script>
