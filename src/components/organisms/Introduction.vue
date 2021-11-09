<template>
  <div class="intro flex-col xl:flex-row flex justify-between items-center relative lg:h-screen overflow-hidden" id="intro">
    <div class="values">
      <div
        class="value text-left"
        v-for="(value, index) in values"
        :key="value.name"
        :class="index % 3 === 0 ? 'text-gray-200' : index % 2 === 0 ? 'text-ab-gray' : 'text-ab-primary'"
      >
        {{ value.name }}
      </div>
    </div>

    <div class="flex flex-col w-full items-center lg:px-24 text-justify">
      <div class="presentation" v-html="presentation" />
      <div class="flex flex-wrap items-center justify-center gap-8 px-4 text-white">
        <div
          class="
            w-24
            h-24
            hover:scale-110
            transition-transform
            flex flex-col
            items-center
            justify-center
            rounded-full
            shadow-ab
            p-4
            bg-ab-primary
          "
        >
          <span class="text-lg">25 ans</span>
          <Icon class="w-8 h-8 stroke-current" kind="age" />
        </div>
        <div
          class="
            w-24
            h-24
            hover:scale-110
            transition-transform
            flex flex-col
            items-center
            justify-center
            rounded-full
            shadow-ab
            p-4
            bg-ab-primary
          "
        >
          <span class="text-lg">2 ans</span>
          <Icon class="w-8 h-8 stroke-current" kind="code" />
        </div>
        <div
          class="
            w-24
            h-24
            hover:scale-110
            transition-transform
            flex flex-col
            items-center
            justify-center
            rounded-full
            shadow-ab
            p-4
            bg-ab-primary
          "
        >
          <span class="text-lg">3.5 ans</span>
          <Icon class="w-8 h-8 stroke-current" kind="skyscrapper" />
        </div>
        <div
          class="
            w-24
            h-24
            hover:scale-110
            transition-transform
            flex flex-col
            items-center
            justify-center
            rounded-full
            shadow-ab
            p-4
            bg-ab-primary
          "
        >
          <span class="text-lg">Rennes</span>
          <Icon class="w-8 h-8 stroke-current" kind="map-pin" />
        </div>
      </div>
      <div class="presentation" v-html="presentation2" />
    </div>

    <div class="values delay">
      <div
        class="value text-right"
        v-for="(value, index) in values"
        :key="value.name"
        :class="index % 3 === 0 ? 'text-gray-200' : index % 2 === 0 ? 'text-ab-gray' : 'text-ab-primary'"
      >
        {{ value.name }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { presentation, presentation2, values } from '../../data'
import Icon from '../atoms/Icon.vue'
</script>

<style lang="scss">
.values {
  @apply flex flex-row w-screen lg:w-auto lg:flex-col gap-2 lg:gap-6 justify-evenly text-gray-200 text-4xl px-2 my-8;
  animation: lateralMove 20s linear infinite;
  animation-direction: alternate-reverse;
}

.intro {
  @apply bg-white dark:bg-gray-700 transition-all duration-300;

  &:before,
  &:after {
    @apply absolute h-20 dark:h-20 w-full;
    content: '';
  }

  &:before {
    @apply top-0 bg-gradient-to-b from-gray-100 dark:from-gray-800 to-transparent;
    z-index: 1;
  }

  &:after {
    @apply bottom-0 bg-gradient-to-t from-gray-100 dark:from-gray-800 to-transparent;
  }
}

.delay {
  animation-delay: -20s;
}

.presentation {
  @apply flex flex-col rounded-2xl items-center justify-center text-ab-gray dark:text-white p-8 text-left;

  h1 {
    @apply text-4xl lg:text-6xl leading-none pb-2 lg:leading-loose;
  }
}

@keyframes lateralMove {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

@screen lg {
  @keyframes lateralMove {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(-100%);
    }
  }
}
</style>
