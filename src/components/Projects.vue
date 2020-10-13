<template>
    <div class="flex items-center justify-between mx-8 md:mx-4 m-4">
        <div class="relative">
            <h1 class="relative text-2xl font-semibold text-green-800 border-b-6 dark:border-green-800 leading-none">Projets</h1>
        </div>
        <ul class="flex inline-block relative overflow-scroll">
            <li @click="projectYearFilter = null" :class="{'selected': !projectYearFilter }" class="relative filter-item mx-2 cursor-pointer">Tous</li>
            <li @click="projectYearFilter = '2020'" :class="{'selected' : projectYearFilter === '2020' }" class="relative filter-item mx-2 cursor-pointer">2020</li>
            <li @click="projectYearFilter = '2019'" :class="{'selected': projectYearFilter === '2019' }" class="relative filter-item mx-2 cursor-pointer">2019</li>
        </ul>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-4 justify-center">
        <div class="project relative flex items-start bg-white rounded-lg shadow-lg mx-2 animate-task dark:text-white bg-gradient-to-br dark:from-gray-700 dark:to-gray-600" v-for="(project, index) in filteredProjects" :key="index">
            <div class="flex justify-center items-center mask transition duration-500 ease-in-out absolute rounded-lg z-20 p-0 opacity-0 hover:opacity-85 bg-green-800 w-full h-full cursor-pointer"
            @click="handleUrl(project.url)">
                <svg v-if="project.url"  xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-link" width="28" height="28" viewBox="0 0 24 24" stroke-width="2" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5" />
                    <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5" />
                </svg>
                <div v-if="project.type !== 'public'" class="text-white text-lg">
                    <div v-if="project.type === 'private'">Projet privé.</div>
                    <div v-else-if="project.type === 'build'">Projet en construction.</div>
                    <div v-else-if="project.type === 'here'">Vous y êtes ! :)</div>
                    <div v-if="project.type !== 'here'">Démo sur demande :)</div>
                </div>
            </div>
            <div class="p-4 flex flex-col">
                <div class="flex">
                <div class="w-2/3 flex flex-col items-start justify-start">
                    <div class="flex justify-start items-center">
                    <span class="font-bold text-left text-2xl">{{ project.name }}</span>
                    <span class="font-bold text-sm ml-4">{{ project.year }}</span>
                    </div>
                    <span class="text-justify">{{ project.description }}</span>
                </div>
                <div class="w-1/3 ml-6 flex justify-start items-start">
                    <div class="border-gray-400 border-2 shadow rounded-lg p-2">
                        Logo du projet (à venir)
                        <!--<img src="" :alt="`${project.name} logo`">-->
                    </div>
                </div>
                </div>
                <div class="tags flex flex-wrap">
                    <div class="text-xs bg-green-200 dark:text-black rounded-lg p-1 px-2 m-1" v-for="(tag, index) in project.tags">
                        {{ tag }}
                    </div>
                </div>
            </div>
        </div>
        </div>
</template>

<script>
import openUrl from '../utils/urls'

export default {
  name: 'Projects',
  data() {
    return {
      projects: [
          { name: 'Portfolio', year: '2020', type: 'here', description: `Présentation de mon profil, de mes compétences et de ma philosophie`, tags: ['Vue 3', 'Typescript', 'Tailwind CSS']},
          { name: 'Vinaigre', year: '2020', type: 'build', description: `Application de gestion des tâches quotidiennes`, tags: ['Vue 3', 'Node.js', 'Tailwind CSS']},
          { name: 'Compote', year: '2020', type: 'private', description: `Outil d'industrialisation interne dans le domaine de la CCM`, tags: ['Electron', 'Vue 2', 'Node.js', 'Tailwind CSS', 'Element UI']},
          { name: 'Onigi', year: '2020', type: 'build', description: `Plateforme de vente de producteurs locaux à consommateurs`,  tags: ['Tailwind CSS', 'Vue 2', 'Nuxt', 'Strapi.js', 'Mongo DB', 'iView']},
          { name: 'MA Vitesse', year: '2019', type: 'public', description: `Outil de calcul intelligent de vitesse`, url:'http://ma-vitesse-dev.herokuapp.com/', tags: ['Tailwind CSS', 'Vue 2', 'Mongo DB', 'Heroku']},
          { name: 'Geckoop', year: '2019', type: 'public', description: `Outil de génération d'étiquettes pour l'épicerie coopérative rennaise Breizhicoop`, logo: './assets/projects/geckoop-logo.png', url:'https://geckoop-dev.breizhicoop.fr/', tags: ['jQuery', 'Bulma', 'Django', 'Python']}
      ],
      projectYearFilter: null,
    }
  },
    methods: {
      handleUrl(url) {
          if (!url) { return }
          openUrl(url)
      }
    },
    computed: {
      filteredProjects () {
          if (!this.projectYearFilter) { return this.projects }
          else {
             return this.projects.filter(project => project.year === this.projectYearFilter)
          }
      }
    }
}
</script>

<style scoped>
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
        @apply block bg-green-800 rounded-full absolute;
        left: 0;
        content: "";
        height: 1.5px;
        width: 100%;
    }

    .filter-item.selected:after {
        @apply block bg-green-800 rounded-full absolute;
        width: 100%;
        left: 0;
    }

    .animate-task {
        @apply transition duration-700 ease-in-out transform hover:scale-105;
    }

    /* base */
    .project {
        backface-visibility: hidden;
        z-index: 1;
    }
</style>
