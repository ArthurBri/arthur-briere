<template>
  <div class="butterfly">
    <div class="left-flap h-full w-full row-span-2 flex flex-col items-end">
      <div class="top-left-wing text-ab-primary bg-white overflow-hidden h-2/5 lg:h-3/5 w-full" :class="animateEnter && 'enter'">
        <slot name="top-left" />
      </div>
      <div class="bottom-left-wing text-white bg-ab-gray overflow-hidden w-5/6 h-2/5" :class="animateEnter && 'enter'">
        <slot name="bottom-left" />
      </div>
    </div>
    <div class="right-flap row-span-2 flex flex-col">
      <div class="top-right-wing bg-ab-primary text-white overflow-hidden h-2/5 lg:h-3/5 w-full" :class="animateEnter && 'enter'">
        <slot name="top-right" />
      </div>
      <div class="bottom-right-wing text-ab-primary bg-gray-100 overflow-hidden w-5/6 h-2/5" :class="animateEnter && 'enter'">
        <slot name="bottom-right" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  animationSpeed: {
    type: String,
    default: '100ms',
  },
  animateEnter: {
    type: Boolean,
    default: true,
  },
})

const animationPlayState = ref('paused')

onMounted(() => window.addEventListener('scroll', () => (animationPlayState.value = 'running')))
</script>

<style lang="scss" scoped>
.butterfly {
  @apply relative grid grid-cols-2 grid-rows-2;
}

.wing {
  @apply shadow-ab;
}
.top-left-wing {
  @apply rounded-[50%] rounded-br-[8%] rounded-tl-[8%];
  &.enter {
    animation: from-top-left v-bind(animationSpeed) ease-in-out;
  }
}

.bottom-left-wing {
  @apply rounded-tl-[40%] rounded-tr-[8%] rounded-br-[50%] rounded-bl-[8%];
  &.enter {
    animation: from-bottom-left v-bind(animationSpeed) ease-in-out;
  }
}

.top-right-wing {
  @apply rounded-[50%] rounded-tr-[8%] rounded-bl-[8%];
  &.enter {
    animation: from-top-right v-bind(animationSpeed) ease-in-out;
  }
}

.bottom-right-wing {
  @apply rounded-tr-[40%] rounded-tl-[8%] rounded-bl-[50%] rounded-br-[8%];
  &.enter {
    animation: from-bottom-right v-bind(animationSpeed) ease-in-out;
  }
}

.right-flap {
  animation: rightflap v-bind(animationSpeed) cubic-bezier(0.48, 0.01, 0.54, 1) infinite;
  animation-direction: alternate;
  transform-origin: left;
  animation-play-state: v-bind(animationPlayState);
}

.left-flap {
  animation: rightflap v-bind(animationSpeed) cubic-bezier(0.48, 0.01, 0.54, 1) infinite;
  animation-direction: alternate;
  animation-fill-mode: reverse;
  transform-origin: right;
  animation-play-state: v-bind(animationPlayState);
}

@keyframes from-top-right {
  0% {
    opacity: 0;
    transform: translateX(5rem) translateY(-5rem);
  }
  100% {
    opacity: 1;
    transform: translateX(0rem) translateY(0);
  }
}

@keyframes from-bottom-left {
  0% {
    opacity: 0;
    transform: translateX(-5rem) translateY(5rem);
  }
  100% {
    opacity: 1;
    transform: translateX(0rem) translateY(0);
  }
}

@keyframes from-top-left {
  0% {
    opacity: 0;
    transform: translateX(-5rem) translateY(-5rem);
  }
  100% {
    opacity: 1;
    transform: translateX(0rem) translateY(0);
  }
}

@keyframes from-bottom-right {
  0% {
    opacity: 0;
    transform: translateX(5rem) translateY(5rem);
  }
  100% {
    opacity: 1;
    transform: translateX(0rem) translateY(0);
  }
}

@keyframes rightflap {
  0% {
    transform: rotateY(-20deg);
  }

  100% {
    transform: rotateY(80deg);
  }
}
</style>
