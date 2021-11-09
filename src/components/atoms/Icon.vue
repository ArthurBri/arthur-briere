<template>
  <component v-if="isSvgIcon" :is="svgComponent" class="stroke-current" />
  <img v-else-if="isWebpIcon" :src="imgSource" :alt="kind" />
</template>

<script setup>
import { onMounted, ref, h } from 'vue'
const svgComponent = ref()
const imgSource = ref('')

const isSvgIcon = ref(false)
const isWebpIcon = ref(false)

const props = defineProps({
  kind: String,
  as: String,
})

onMounted(async () => {
  const icons = import.meta.glob('../../assets/icons/*.{svg,webp}')
  isSvgIcon.value = icons[`../../assets/icons/${props.kind}.svg`]
  isWebpIcon.value = icons[`../../assets/icons/${props.kind}.webp`]

  if (!isSvgIcon && !isWebpIcon) {
    console.log(`icon '${props.kind}' is missing from icon folder. Nothing is going to be rendered.`)
    return
  }

  if (isSvgIcon.value) {
    const currentIcon = await icons[`../../assets/icons/${props.kind}.svg`]()
    svgComponent.value = props.as ? h(props.as, {}, currentIcon.default()) : currentIcon.default
  } else if (isWebpIcon.value) {
    const currentIcon = await icons[`../../assets/icons/${props.kind}.webp`]()
    imgSource.value = props.as ? h(props.as, {}, currentIcon.default()) : currentIcon.default
  }
})
</script>
