<template>
  <component v-if="isSvgIcon" :is='svgComponent' class="stroke-current" />
  <img v-else-if="isPngIcon" :src="imgSource" />
</template>

<script setup>
import { onMounted, defineProps, ref, h } from 'vue'
const svgComponent = ref()
const imgSource = ref('')

const isSvgIcon = ref(false)
const isPngIcon = ref(false)

const props = defineProps({
  kind: String,
  as: String
})

onMounted(async () => {
  const icons = import.meta.glob('../../assets/icons/*.{svg,png}')
  isSvgIcon.value = icons[`../../assets/icons/${props.kind}.svg`]
  isPngIcon.value = icons[`../../assets/icons/${props.kind}.png`]

  if (!isSvgIcon && !isPngIcon) {
    console.log(`icon '${props.kind}' is missing from icon folder. Nothing will be rendered.`)
    return
  }

  if (isSvgIcon.value) {
    const currentIcon = await icons[`../../assets/icons/${props.kind}.svg`]()
    svgComponent.value = props.as 
      ? h(props.as, {}, currentIcon.default())
      : currentIcon.default
  } else if (isPngIcon.value) {
    const currentIcon = await icons[`../../assets/icons/${props.kind}.png`]()
    imgSource.value = props.as
      ? h(props.as, {}, currentIcon.default())
      : currentIcon.default
  }
})
</script>