<template>
    <div class="flex flex-wrap items-center content-center justify-between mt-12 mx-8 md:mx-4 m-4">
        <h1 class="relative text-2xl font-semibold text-white border-b-6 leading-none mr-4">Expériences & Intérêts</h1>
        <div class="flex inline-block relative overflow-auto text-white mt-2">
            <span @click="filterType = null" :class="{'selected': !filterType }" class="relative filter-item mr-4 cursor-pointer">Tous</span>
            <span @click="filterType = 'experience'" :class="{'selected' : filterType === 'experience' }" class="relative filter-item mr-4 cursor-pointer">Expériences</span>
            <span @click="filterType = 'interest'" :class="{'selected': filterType === 'interest' }" class="relative filter-item mr-4 cursor-pointer">Centres d'intérêt</span>
        </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-4 justify-center">
        <transition-group name="projects">
            <div class="card relative flex items-start rounded-lg shadow-lg mx-2 dark:text-white" v-for="(project, index) in filteredExperiences" :key="index">
                <div class="p-4 flex flex-col">
                    <div class="flex">
                        <div class="w-full flex flex-col items-start justify-start">
                            <div class="flex justify-start items-center">
                                <span class="font-bold text-left text-2xl">{{ project.name }}</span>
                                <span class="font-bold text-sm ml-4">{{ project.year }}</span>
                            </div>
                            <span class="text-justify">{{ project.description }}</span>
                        </div>
                    </div>
                    <div class="tags flex flex-wrap">
                        <div class="text-xs bg-blue-200 rounded-lg p-1 px-2 m-1 dark:text-black" v-for="tag in project.tags">
                            {{ tag }}
                        </div>
                    </div>
                </div>
            </div>
        </transition-group>
    </div>
</template>

<script>
    import openUrl from '../utils/urls'

    export default {
        name: 'Experiences',
        data() {
            return {
                experiences: [
                    { name: `Europ'Raid`, type: 'experience', year: '2017', description: `Récolte de 6000€ pour un 4L Trophy like à travers 23 pays d'Europe en 3 semaines.`, tags: ['Gestion de projet', 'Voyage']},
                    { name: `Tuteur de stage`, type: 'experience', year: '2020', description: `Tuteur de stage sur un projet initié en interne chez Sword.`, tags: ['Gestion de projet', 'Travail d\'équipe']},
                    { name: `Photographie`, type: 'interest', description: `Passion pour les couleurs, les formes et les harmonies. Photographies de voyage, de bâtiments ou de grand espaces.`},
                    { name: `Minimalisme`, type: 'interest', description: `A la recherche de simplicité. Adapte du "Less is more."`},
                    { name: `Course à pied`, type: 'interest', description: `Je cours régulièrement. Inscrit au Marathon de Paris 2021 !`},
                    { name: `Formation`, type: 'interest', description: `Je lis tous les jours des articles de blogs technos, ce qui me permet de m'ouvrir en tendance. En parallèle, je me forme sur Typescript et Vue 3 !`},
                         ],
                filterType: null,
            }
        },
        methods: {
            handleUrl(url) {
                if (!url) { return }
                openUrl(url)
            }
        },
        computed: {
            filteredExperiences () {
                if (!this.filterType) { return this.experiences }
                else {
                    return this.experiences.filter(project => project.type === this.filterType)
                }
            }
        }
    }
</script>

<style>
    .filter-item:after {
        background: none repeat scroll 0 0 transparent;
        bottom: 0;
        content: "";
        display: block;
        height: 1.5px;
        left: 50%;
        position: absolute;
        transition: width 0.3s ease 0s, left 0.3s ease 0s;
        width: 0;
    }

    .filter-item:hover:after {
        @apply block bg-white rounded-full absolute;
        left: 0;
        content: "";
        height: 1.5px;
        width: 100%;
    }

    .filter-item.selected:after {
        @apply block bg-white rounded-full absolute;
        width: 100%;
        left: 0;
    }

    .card {
        @apply bg-white bg-opacity-75 dark:bg-gray-800;
        backdrop-filter: blur(5px);
        z-index: 1;
    }
</style>
