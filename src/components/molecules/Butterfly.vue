<template>
    <div class="butterfly">
        <div class="flap left-flap flex col-start-1 row-start-1 flex-col items-end justify-end text-ab-primary z-10">
            <div class="wing top-left-wing rounded-l-full rounded-tr-full bg-gray-200 overflow-hidden">
                <slot name="top-left" />
            </div>
        </div>
        <div class="flap left-flap flex col-start-1 row-start-2 flex-col items-end justify-start z-10">
            <div class="wing bottom-left-wing rounded-l-full rounded-br-full text-white bg-ab-gray overflow-hidden">
                <slot name="bottom-left" />
            </div>
        </div>
        <div class="flap right-flap col-start-2 row-start-1 flex items-end">
            <div class="wing top-right-wing bg-ab-primary rounded-t-full rounded-br-full text-white overflow-hidden">
                <slot name="top-right" />
            </div>
        </div>
        <div class="right-flap col-start-2 row-start-2 flex items-start">
            <div class="wing bottom-right-wing text-ab-primary bg-gray-200 rounded-r-full rounded-bl-full overflow-hidden">
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
        default: '20ms'
    }
})

const animationPlayState = ref('paused')

onMounted(() => window.addEventListener('scroll', () => animationPlayState.value = 'running'))
</script>

<style lang="scss" scoped>
.butterfly {
    @apply grid grid-cols-2 grid-rows-2;
}

.wing {
    @apply w-5/6 h-1/2 lg:w-2/6 shadow-ab;
}

.top-left-wing {
    animation: from-top-left v-bind(animationSpeed) ease-in-out;
}

.bottom-left-wing {
    animation: from-bottom-left v-bind(animationSpeed) ease-in-out;
}

.top-right-wing {
    animation: from-top-right v-bind(animationSpeed) ease-in-out;
}

.bottom-right-wing {
    animation: from-bottom-right v-bind(animationSpeed) ease-in-out;
}

.right-flap {
    animation: rightflap v-bind(animationSpeed) cubic-bezier(.48,.01,.54,1) infinite;
    animation-direction: alternate;
    transform-origin: left;
    animation-play-state: v-bind(animationPlayState);
}

.left-flap {
    animation: rightflap v-bind(animationSpeed) cubic-bezier(.48,.01,.54,1) infinite;
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