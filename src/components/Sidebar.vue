<template>
    <div class="sidebar hidden shadow-lg sm:flex md:flex lg:flex xl:flex flex-col justify-between items-start h-screen bg-gradient-to-b dark:from-gray-800 from-white p-4"
         style="backdrop-filter: blur(5px);width: 350px;">
        <div class="sidebar-start flex flex-col mt-8">
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
            <div class="text-base text-justify px-4 mt-4">
                <p class="text-center dark:text-white"><span class="animate-text">Développeur</span> de 24 ans</p>
                <div class="mb-4 text-center flex justify-center dark:text-white">
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
                <p class="leading-loose dark:text-white">Je soigne l'aspect <span class="animate-text">créatif</span> de
                    mes projets. Je
                    suis passionné à l'idée de résoudre les problèmes des gens par des solutions qu'ils n'avaient pas
                    imaginées. Lorsque je n'y arrive pas, je fais de mon mieux pour les traiter avec soin et qualité.
                    J'aime <span class="animate-text">concevoir</span>, imaginer et <span
                            class="animate-text">créer</span> en empruntant des <span
                            class="animate-text">routes nouvelles</span>.</p>

            </div>
        </div>
        <div class="sidebar-middle">
            <span class="text-xl dark:text-green-200">Ces mots me parlent...</span>
            <div class="flex flex-wrap text-white justify-between">
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
                window.open('mailto:arthur.briere@outlok.fr', '_self')
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
                elements[i].addEventListener('click', animateButton, false);
            }
        }
    }
</script>

<style scoped>
    .animate-text {
        @apply text-green-800 dark:text-green-400 opacity-50 hover:opacity-100 animate-scale font-bold cursor-pointer outline-none;
        display: inline-block;
        position: relative;
    }

    .animate-text:focus { outline: 0; }

    .animate-text:before, .animate-text:after {
        position: absolute;
        content: '';
        display: block;
        width: 140%;
        height: 100%;
        left: -20%;
        z-index: -1000;
        transition: all ease-in-out 0.5s;
        background-repeat: no-repeat;
    }

    .animate-text:before {
        display: none;
        top: -75%;
        background-image: radial-gradient(circle, green 20%, transparent 20%), radial-gradient(circle, transparent 20%, green 20%, transparent 30%), radial-gradient(circle, green 20%, transparent 20%), radial-gradient(circle, green 20%, transparent 20%), radial-gradient(circle, transparent 10%, green 15%, transparent 20%), radial-gradient(circle, green 20%, transparent 20%), radial-gradient(circle, green 20%, transparent 20%), radial-gradient(circle, green 20%, transparent 20%), radial-gradient(circle, green 20%, transparent 20%);
        background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%, 15% 15%, 10% 10%, 18% 18%;
    }

    .animate-text:after {
        display: none;
        bottom: -75%;
        background-image: radial-gradient(circle, green 20%, transparent 20%), radial-gradient(circle, green 20%, transparent 20%), radial-gradient(circle, transparent 10%, green 15%, transparent 20%), radial-gradient(circle, green 20%, transparent 20%), radial-gradient(circle, green 20%, transparent 20%), radial-gradient(circle, green 20%, transparent 20%), radial-gradient(circle, green 20%, transparent 20%);
        background-size: 15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 10% 10%, 20% 20%;
    }

    .animate-text:active {
        transform: scale(0.9);
    }

    .animate-text.animate:before {
        display: block;
        animation: topBubbles ease-in-out 0.75s forwards;
    }

    .animate-text.animate:after {
        display: block;
        animation: bottomBubbles ease-in-out 0.75s forwards;
    }
    @keyframes
    topBubbles {  0% {
        background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%, 40% 90%, 55% 90%, 70% 90%;
    }
        50% {
            background-position: 0 80%, 0 20%, 10% 40%, 20% 0, 30% 30%, 22% 50%, 50% 50%, 65% 20%, 90% 30%;
        }
        100% {
            background-position: 0 70%, 0 10%, 10% 30%, 20% -10%, 30% 20%, 22% 40%, 50% 40%, 65% 10%, 90% 20%;
            background-size: 0 0, 0 0, 0 0, 0 0, 0 0, 0 0;
        }
    }
    @keyframes
    bottomBubbles {  0% {
        background-position: 10% -10%, 30% 10%, 55% -10%, 70% -10%, 85% -10%, 70% -10%, 70% 0;
    }
        50% {
            background-position: 0 80%, 20% 80%, 45% 60%, 60% 100%, 75% 70%, 95% 60%, 105% 0;
        }
        100% {
            background-position: 0 90%, 20% 90%, 45% 70%, 60% 110%, 75% 80%, 95% 70%, 110% 10%;
            background-size: 0 0, 0 0, 0 0, 0 0, 0 0, 0 0 ;
        }
    }

    .animate-scale {
        @apply transition duration-300 ease-in-out transform hover:scale-110;
    }
</style>
