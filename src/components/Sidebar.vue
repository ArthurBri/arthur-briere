<template>
    <div class="sidebar justify-between items-stretch hidden shadow-lg sm:flex md:flex lg:flex xl:flex flex-col justify-between items-start h-screen bg-gradient-to-b dark:from-gray-800 from-white p-4">
        <div class="sidebar-start flex-1 flex-col mt-8">
            <div class="flex justify-center">
                <div class="flex flex-col justify-center items-end mr-4 pr-2">
                    <div class="text-2xl leading-tight font-bold text-green-800 animate-scale">Arthur Brière</div>
                    <div class="flex items-center animate-scale">
                        <p class="text-xl dark:text-gray-200 ml-4">Créateur web</p>
                    </div>
                    <div class="links flex stroke-current dark:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg"
                             @click="handleUrl('https://www.linkedin.com/in/arthur-brière/')"
                             class="icon icon-tabler icon-tabler-brand-linkedin cursor-pointer animate-scale stroke-current dark:text-white"
                             width="30" height="30"
                             viewBox="0 0 24 24" stroke-width="1" stroke="#2c3e50" fill="none"
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
                             class="icon icon-tabler icon-tabler-phone-call ml-2 cursor-pointer animate-scale stroke-current dark:text-white"
                             width="30" height="30"
                             viewBox="0 0 24 24" stroke-width="1" stroke="#2c3e50" fill="none"
                             stroke-linecap="round"
                             stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"/>
                            <path d="M15 7a2 2 0 0 1 2 2"/>
                            <path d="M15 3a6 6 0 0 1 6 6"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" @click="mailMe"
                             class="icon icon-tabler icon-tabler-mail ml-2 cursor-pointer animate-scale stroke-current dark:text-white"
                             width="30"
                             height="30"
                             viewBox="0 0 24 24" stroke-width="1" stroke="#2c3e50" fill="none"
                             stroke-linecap="round"
                             stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <rect x="3" y="5" width="18" height="14" rx="2"/>
                            <polyline points="3 7 12 13 21 7"/>
                        </svg>
                    </div>
                </div>
                <img class="rounded-full transition duration-500 ease-in-out transform hover:scale-105 shadow-lg border-green-800 border-4"
                     style="height:120px;"
                     src="../assets/profile-pic.jpg" alt="Arthur Brière portrait"/>
            </div>
            <div class="text-base px-4 mt-4">
                <p class="text-center dark:text-white"><span class="animate-text">Développeur</span> de 24 ans</p>
              <div class="text-center flex justify-center dark:text-white">
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
      <div class="sidebar-middle my-4 overflow-auto overflow-x-hidden flex flex-col h-full justify-between">
        <p class="leading-loose text-justify dark:text-white px-2 mb-2">Je soigne l'aspect <span class="animate-text">créatif</span> de
            mes projets. Je suis passionné à l'idée de résoudre les problèmes des gens par des <span class="animate-text">solutions</span> qu'ils n'avaient pas
            imaginées. Je suis à la recherche permanente de façons innovantes d'agir et de faire. J'aime <span class="animate-text">concevoir</span>, imaginer et <span
              class="animate-text">créer</span> en empruntant des <span
              class="animate-text">routes nouvelles</span>.</p>
        <div class="flex flex-wrap text-white justify-between overflow-hidden">
          <div class="flex w-full items-center justify-center">
            <span class="text-xl text-green-300">Ces mots me parlent...</span>
          </div>
          <div class="text-xl ml-3" v-for="value in $store.state.values ">
            {{ value.name }}
          </div>
        </div>
      </div>

      <div class="sidebar-end text-gray-500 text-sm px-4">
        Développé en Vue.js, TypeScript, et TailwindCSS
      </div>
    </div>
</template>

<script lang="ts">
    import openUrl from "../utils/urls";

    export default {
        name: "Sidebar",
        methods: {
            handleUrl(url: string) {
                openUrl(url)
            },
            callMe() {
                window.open('tel://+33770473953',  '_self')
            },
            mailMe() {
                window.open('mailto:arthur.briere@outlook.fr', '_self')
            }
        },
        mounted () {
            var animateButton = function (e) {
                e.preventDefault;
                //reset animation
                e.target.classList.remove('animate');

                e.target.classList.add('animate');
                setTimeout(function(){
                    e.target.classList.remove('animate');
                },700);
            };

            let elements = document.getElementsByClassName("animate-text");
            for (var i = 0; i < elements.length; i++) {
                elements[i].addEventListener('mouseover', animateButton, false);
            }
        }
    }
</script>

<style scoped lang="scss">
@import "src/index.scss";

    .sidebar {
     backdrop-filter: blur(5px);
      width: $sidebar-width;
    }
</style>
