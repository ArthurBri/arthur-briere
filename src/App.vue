<template>
    <div class="app flex">
        <Sidebar />
        <div class="main-content max-h-screen max-w-full z-10">
            <div class="header flex sm:hidden md:hidden lg:hidden xl:hidden">
                <Header />
            </div>
            <div class="body h-full pb-16 py-0 md:py-4 lg:py-8 px-0 sm:px-2 md:px-4 lg:px-6 lg:px-8 mt-12 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-0 overflow-auto">
                <Projects />
                <Skills />
                <Experiences />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Projects from './components/Projects.vue'
    import Skills from './components/Skills.vue'
    import Experiences from './components/Experiences.vue'

    import Header from './components/Header.vue'
    import Sidebar from './components/Sidebar.vue'

    export default {
        name: 'App',
        components: {
            Projects,
            Skills,
            Experiences,
            Header,
            Sidebar
        }
    }
</script>

<style lang="scss">
    @import "src/index.scss";

    .app::before {
        @pply overflow-hidden;
        content: "";
        position: absolute;
        top: 0; left: 0;
        z-index: 0;
        width: 100%;
        height: 100%;
        background: url('https://res.cloudinary.com/da4emp01n/image/upload/c_fit,h_1080,q_80,w_1920/v1602833166/bg-image_zrupki.jpg');
        background-size: cover;
    }

    @media (prefers-color-scheme: dark) {
        .app::before {
            filter: grayscale(100%) contrast(120%);
        }
    }

    .app {
        @apply bg-auto bg-green-800 h-screen overflow-hidden;
        min-width: 320px;
    }

    @media (min-width: 640px) {
        .main-content {
            width: calc(100vw - #{$sidebar-width});
        }
    }

</style>
