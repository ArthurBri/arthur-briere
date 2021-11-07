<template>
  <div class="butterfly-wrapper fixed h-screen w-screen">
    <Butterfly
      v-for="(butterfly, index) in butterflies"
      :key="index"
      class="butterfly fixed w-24 h-20"
      :style="butterfly"
    />
  </div>
</template>

<script setup>
import Butterfly from '../molecules/Butterfly.vue'

const butterflies = [
  { left: '50%', top: '25%' },
  { left: '75%%', top: '25%' }
]
</script>
