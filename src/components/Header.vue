<template>
    <div class="header fixed z-10 w-full flex items-center h-12 px-2 justify-between bg-gradient-to-r dark:from-gray-800 text-teal-800 dark:text-white from-white">
        <div class="flex items-center" @click="menuVisible = !menuVisible">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu cursor-pointer transition duration-300 stroke-current" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFFFFF" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <line :x1="menuVisible ? 6 : 4" :x2="menuVisible ? 18 : 20" :y1="menuVisible ? 6 : 8" :y2="menuVisible ? 18 : 8" class="transition duration-300" />
            <line :x1="menuVisible ? 6 : 4" :x2="menuVisible ? 18 : 20" :y1="menuVisible ? 18 : 16" :y2="menuVisible ? 6 : 16" class="transition duration-300" />
        </svg>
            <div class="m-2 font-medium text-xl animate-scale">Arthur Brière</div>
        </div>
            <div class="links flex items-center">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg"
                     @click="handleUrl('https://www.linkedin.com/in/arthur-brière/')"
                     class="icon icon-tabler icon-tabler-brand-linkedin cursor-pointer animate-scale stroke-current"
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
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" @click="callMe"
                     class="icon icon-tabler icon-tabler-phone-call ml-2 cursor-pointer animate-scale stroke-current"
                     width="25" height="25"
                     viewBox="0 0 24 24" stroke-width="1" stroke="#FFFFFF" fill="none"
                     stroke-linecap="round"
                     stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"/>
                    <path d="M15 7a2 2 0 0 1 2 2"/>
                    <path d="M15 3a6 6 0 0 1 6 6"/>
                </svg>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" @click="mailMe"
                     class="icon icon-tabler icon-tabler-mail ml-2 cursor-pointer animate-scale stroke-current" width="25"
                     height="25"
                     viewBox="0 0 24 24" stroke-width="1" stroke="#FFFFFF" fill="none"
                     stroke-linecap="round"
                     stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <rect x="3" y="5" width="18" height="14" rx="2"/>
                    <polyline points="3 7 12 13 21 7"/>
                </svg>
              </div>
                <DarkModeSwitch position="relative"/>
            </div>
    </div>
    <div class="menu fixed w-full z-30 overflow-scroll" style="background: rgba(39, 103, 73, 0.8);backdrop-filter: blur(5px)" :class="menuVisible ? 'block': 'hidden'">
        <div class="flex justify-center items-center mt-8">
        <img class=" rounded-full transition duration-500 ease-in-out transform hover:scale-105 shadow-lg border-white border-4"
             style="height:80px;"
             src="../assets/profile-pic.jpg" alt="Arthur Brière portrait"/>
          <div class="text-base px-4 h-full flex flex-col items-center justify-center">
            <p class="text-center dark:text-white"><span class="animate-text">Ingénieur d'études</span>, 24 ans</p>
            <div class="text-center flex justify-center text-gray-200 dark:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-2 stroke-current"
                   width="20" height="20" viewBox="0 0 24 24" stroke-width="1" stroke="#03A9F4" fill="none"
                   stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <line x1="18" y1="6" x2="18" y2="6.01"/>
                <path d="M18 13l-3.5 -5a4 4 0 1 1 7 0l-3.5 5"/>
                <polyline points="10.5 4.75 9 4 3 7 3 20 9 17 15 20 21 17 21 15"/>
                <line x1="9" y1="4" x2="9" y2="17"/>
                <line x1="15" y1="15" x2="15" y2="20"/>
              </svg>
              <span class="ml-2">Rennes, France</span></div>
          </div>
        </div>
        <div class="text-gray-200">
            <div class="text-base text-justify px-4 mt-4">
              <p class="leading-loose text-justify dark:text-white px-2 mb-2">Je soigne l'aspect <span class="animate-text">créatif</span> de
                mes projets. Je suis passionné à l'idée de résoudre les problèmes des gens par des <span class="animate-text">solutions</span> qu'ils n'avaient pas
                imaginées. Je suis à la recherche permanente de façons innovantes d'agir et de faire. J'aime <span class="animate-text">concevoir</span>, imaginer et <span
                    class="animate-text">créer</span> en empruntant des <span
                    class="animate-text">routes nouvelles</span>. Fervent adepte du "Less is more".</p>
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
import DarkModeSwitch from "./DarkModeSwitch.vue";
    import openUrl from "../utils/urls";

    export default {
      components: { DarkModeSwitch },
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
                window.open('mailto:arthur.briere@outlook.fr', '_self')
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
        backdrop-filter: blur(5px);
    }
</style>
