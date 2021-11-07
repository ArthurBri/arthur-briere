<template>
  <div ref="mouseTracker" class="mouse" :class="ringColor" />
</template>

<script setup>
import { ref, onMounted } from "vue"
const mouseTracker = ref(null);
const ringColor = ref("ring-ab-primary");
let mouseX = window.innerWidth / 2 - 3;
let mouseY = 50;

document.onclick = (event) => {
  handleClick();
};

document.onmousedown = (event) => {
  handleKeyPress();
};

document.onmousemove = (event) => {
  mouseX = event.clientX;
  mouseY = event.clientY;
};

onMounted(() => {
  setInterval(() => {
    if (mouseTracker.value?.style) {
      mouseTracker.value.style.left =
        lerp(
          mouseTracker.value.style.left.replace("px", "") || 0,
          mouseX - 12 + scrollX,
          0.3
        ) + "px";
      mouseTracker.value.style.top =
        lerp(
          mouseTracker.value.style.top.replace("px", "") || 0,
          mouseY - 12 + scrollY,
          0.3
        ) + "px";
    }
  }, 40);
});

const lerp = (start, end, amt) => (1 - amt) * start + amt * end;

const handleClick = () => {
  ringColor.value = "water-drop";
  setTimeout(() => (ringColor.value = ""), 300);
};

const handleKeyPress = () => {
  ringColor.value = "water-drop-down";
  setTimeout(() => (ringColor.value = ""), 300);
};
</script>

<style scoped>
@media (pointer: fine) {
  .mouse {
    @apply h-6 w-6 absolute rounded-full ring-2 ring-ab-primary;
  }
}

.water-drop {
  animation: waterDrop 300ms ease-in;
}

.water-drop-down {
  animation: waterDropDown 300ms ease-in forwards;
}

@keyframes waterDrop {
  20% {
    transform: scale(0.9);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes waterDrop {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.54);
  }
}
</style>
