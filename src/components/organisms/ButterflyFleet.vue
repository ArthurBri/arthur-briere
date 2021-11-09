<template>
  <div class="butterfly-wrapper absolute top-0 left-0 h-full w-full">
    <Butterfly v-for="(butterfly, index) in butterflies" :key="index" class="butterfly fixed w-12 h-12" :style="butterfly" />
  </div>
</template>

<script setup>
import Butterfly from '../molecules/Butterfly.vue'

defineProps({
  butterflies: Object,
})
</script>

<style scoped>
.butterflyy {
  animation: xAxis 5s infinite cubic-bezier(0.02, 0.01, 0.21, 1);
}

.butterflyy-wrapper {
  animation: yAxis 5s infinite cubic-bezier(0.3, 0.27, 0.07, 1.64);
}

@keyframes yAxis {
  50% {
    animation-timing-function: cubic-bezier(0.02, 0.01, 0.21, 1);
    transform: translateY(-200px) rotate(45deg);
  }
}

@keyframes xAxis {
  50% {
    animation-timing-function: cubic-bezier(0.3, 0.27, 0.07, 1.64);
    transform: translateX(200px) rotate(-45deg);
  }
}
</style>
