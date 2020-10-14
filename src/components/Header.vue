<template>
    <div class="header fixed z-10 w-full flex items-center h-12 px-2 justify-between bg-gradient-to-br to-green-700 from-green-800">
        <div class="flex items-center" @click="menuVisible = !menuVisible">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu cursor-pointer" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFFFFF" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <line x1="4" y1="8" x2="20" y2="8" />
            <line x1="4" y1="16" x2="20" y2="16" />
        </svg>
            <div class="m-2 font-medium text-white text-xl animate-scale">Arthur Brière</div>
        </div>
            <div class="links flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg"
                     @click="handleUrl('https://www.linkedin.com/in/arthur-brière/')"
                     class="icon icon-tabler icon-tabler-brand-linkedin cursor-pointer animate-scale"
                     width="25" height="25"
                     viewBox="0 0 24 24" stroke-width="1" stroke="#FFFFFF" fill="none"
                     stroke-linecap="round"
                     stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <rect x="4" y="4" width="16" height="16" rx="2"/>
                    <line x1="8" y1="11" x2="8" y2="16"/>
                    <line x1="8" y1="8" x2="8" y2="8.01"/>
                    <line x1="12" y1="16" x2="12" y2="11"/>
                    <path d="M16 16v-3a2 2 0 0 0 -4 0"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" @click="callMe"
                     class="icon icon-tabler icon-tabler-phone-call ml-2 cursor-pointer animate-scale"
                     width="25" height="25"
                     viewBox="0 0 24 24" stroke-width="1" stroke="#FFFFFF" fill="none"
                     stroke-linecap="round"
                     stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"/>
                    <path d="M15 7a2 2 0 0 1 2 2"/>
                    <path d="M15 3a6 6 0 0 1 6 6"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" @click="mailMe"
                     class="icon icon-tabler icon-tabler-mail ml-2 cursor-pointer animate-scale" width="25"
                     height="25"
                     viewBox="0 0 24 24" stroke-width="1" stroke="#FFFFFF" fill="none"
                     stroke-linecap="round"
                     stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <rect x="3" y="5" width="18" height="14" rx="2"/>
                    <polyline points="3 7 12 13 21 7"/>
                </svg>
            </div>
    </div>
    <div class="menu fixed w-full z-30 overflow-scroll" style="background: rgba(39, 103, 73, 0.8);backdrop-filter: blur(5px)" :class="menuVisible ? 'block': 'hidden'">
        <div class="flex justify-center items-center">
        <img class="mt-8 rounded-full transition duration-500 ease-in-out transform hover:scale-105 shadow-lg border-white border-4"
             style="height:80px;"
             src="../assets/profile-pic.jpg" alt="Arthur Brière portrait"/>
        </div>
        <div class="text-gray-200">
            <div class="text-base text-justify px-4 mt-4">
                <p class="mb-4 text-center"><span class="animate-text">Développeur</span> de 24 ans (mais pas que)</p>
                <p class="leading-loose">Je soigne l'aspect <span class="animate-text">créatif</span> de mes projets. Je
                    suis passionné à l'idée de résoudre les problèmes des gens par des solutions qu'ils n'avaient pas
                    imaginées. Lorsque je n'y arrive pas, je fais de mon mieux pour les traiter avec soin et qualité.
                    J'aime <span class="animate-text">concevoir</span>, imaginer et <span class="animate-text">créer</span> en empruntant des <span
                            class="animate-text">routes nouvelles</span>.</p>

            </div>
        </div>
        <div class="mt-8">
        <span class="text-lg text-white font-semibold">Ces mots me parlent...</span>
            <div class="flex flex-wrap text-white justify-between mr-3">
                <div class="text-lg ml-3" v-for="value in $store.state.values ">
                    {{ value.name }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import openUrl from "../utils/urls";

    export default {
        name: "Header",
        data () {
            return {
                menuVisible: false
            }
        },
        methods: {
            handleUrl(url) {
                openUrl(url)
            },
            callMe() {
                window.open('tel://+33770473953',  '_self')
            },
            mailMe() {
                window.open('mailto:arthur.briere@outlok.fr', '_self')
            }
        }
    }
</script>

<style scoped>
    .menu {
        @apply mt-12 overflow-hidden;
        height: calc(100vh - 3rem)
    }

    .animate-text {
        @apply text-white;
    }

    .header {
        min-width: 320px;
    }
</style>
