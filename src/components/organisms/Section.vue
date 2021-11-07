<template>
    <section class="flex flex-col lg:flex-row gap-10" :class="{'lg:flex-row-reverse': order === 'reverse'}" :id="id">
        <div class="flex flex-col lg:w-1/3 relative">
            <div class="sticky top-0">
                <h1 class="section-title" @click="handleSectionTitleClick" :class="sectionTitleActive && 'is-active'">{{ title }}</h1>
                <div class="flex flex-col relative w-full pb-4 md:pb-0">
                    <slot name="description" />
                </div>
            </div>
        </div>
        <slot name="items" />
    </section>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
    order: {
        type: String,
        enum: ['normal', 'reverse']
    },
    id: String,
    title: String
})

const sectionTitleActive = ref(false)

const handleSectionTitleClick = async () => {
    window.location.hash = `#${props.id}`
    sectionTitleActive.value = true
    await copyToClipboard()
    setTimeout(() => {
        sectionTitleActive.value = false
    }, 500)
    
}
const copyToClipboard = async () => {
  await navigator.clipboard.writeText(`${window.location.origin}/#${props.id}`)
}
</script>

<style scoped lang="scss">
section {
    scroll-margin-top: 2rem;
}

.section-title {
    @apply flex items-center relative text-ab-primary dark:text-white dark:text-opacity-80 font-semibold leading-none text-4xl lg:text-5xl text-left cursor-pointer;
    transition: transform 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);

    &:hover {
        transform: translateX(1ch);
    }

    &:hover:before {
        @apply absolute -left-10 text-ab-gray dark:text-gray-200 text-5xl;
        animation: fadeIn 300ms ease-in;
        content:'#';
    }

    &.is-active:after {
        @apply absolute right-0 -top-6 text-base text-ab-gray dark:text-white;
        content: "Lien copié !";
    }
}

@keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
</style>