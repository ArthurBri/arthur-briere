<template>
    <div class="flex items-center justify-between mx-8 md:mx-4 m-4">
        <h1 class="relative text-2xl font-semibold text-green-800 border-b-6 dark:border-green-800 leading-none">Projets</h1>
        <ul class="flex inline-block relative overflow-auto">
            <li @click="projectYearFilter = null" :class="{'selected': !projectYearFilter }" class="relative filter-item mx-2 cursor-pointer">Tous</li>
            <li @click="projectYearFilter = '2020'" :class="{'selected' : projectYearFilter === '2020' }" class="relative filter-item mx-2 cursor-pointer">2020</li>
            <li @click="projectYearFilter = '2019'" :class="{'selected': projectYearFilter === '2019' }" class="relative filter-item mx-2 cursor-pointer">2019</li>
        </ul>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-4 justify-center">
        <div class="project card relative flex items-start bg-white rounded-lg shadow-lg mx-2 animate-task dark:text-white" v-for="(project, index) in filteredProjects" :key="index">
            <div class="flex justify-center items-center mask transition duration-500 ease-in-out absolute rounded-lg z-20 p-0 opacity-0 hover:opacity-85 bg-green-800 w-full h-full">
                <svg @click="handleUrl(project.url)" v-if="project.url"  xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-link cursor-pointer stroke-current text-white hover:text-gray-300 mx-3" width="28" height="28" viewBox="0 0 24 24" stroke-width="2" stroke="" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5" />
                    <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5" />
                </svg>
                <svg v-if="project.pictures" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-slideshow cursor-pointer stroke-current text-white hover:text-gray-300 mx-3" width="28" height="28" viewBox="0 0 24 24" stroke-width="2" stroke="#" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <line x1="15" y1="6" x2="15.01" y2="6" />
                    <rect x="3" y="3" width="18" height="14" rx="3" />
                    <path d="M3 13l4 -4a3 5 0 0 1 3 0l4 4" />
                    <path d="M13 12l2 -2a3 5 0 0 1 3 0l3 3" />
                    <line x1="8" y1="21" x2="8.01" y2="21" />
                    <line x1="12" y1="21" x2="12.01" y2="21" />
                    <line x1="16" y1="21" x2="16.01" y2="21" />
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
                        <div class="flex w-full items-center justify-between">
                    <span class="font-bold text-left text-gray-800 dark:text-gray-200 text-2xl leading-tight">{{ project.name }}</span>
                    <span class="font-bold text-sm ml-4">{{ project.year }}</span>
                        <div class="ml-2" v-if="project.type === 'build'" title="En construction">👨‍💻</div>
                        </div>
                    </div>
                    <span class="text-justify ">{{ project.description }}</span>
                </div>
                <div v-if="project.logo" class="w-1/3 ml-6 flex justify-start items-start">
                    <div class="border-gray-400 border-2 shadow bg-white rounded-lg p-2">
                        <img class="h-1/2" :src="project.logo">
                    </div>
                </div>
                </div>
                <div class="tags flex flex-wrap mt-2">
                    <div class="text-xs bg-green-200 dark:text-black rounded-lg p-1 px-2 m-1" v-for="(tag, index) in project.tags">
                        {{ tag }}</div>
                </div>
            </div>
        </div>
        </div>
    <div class="flex mt-4 ml-2 sm:text-xl md:text-xl lg:text-xl xl:text-lg text-white">👨‍💻 : en construction</div>
</template>

<script>
import openUrl from '../utils/urls'

export default {
  name: 'Projects',
  components: ['CldImage'],
  data() {
    return {
      projects: [
          { name: 'Portfolio', year: '2020', type: 'here', description: `Présentation de mon profil, de mes compétences et de ma philosophie`, tags: ['Vue 3', 'Typescript', 'Tailwind CSS', 'Vitejs'], logo: false},
          { name: 'Vinaigre', year: '2020', type: 'build', description: `Application de gestion des tâches quotidiennes`, logo: 'https://res.cloudinary.com/da4emp01n/image/upload/c_scale,w_200/v1602745084/logo-vinaigre_udqhxc.png', tags: ['Vue 3', 'Node.js', 'Tailwind CSS']},
          { name: 'Compote', year: '2020', type: 'private', description: `Outil d'industrialisation interne dans le domaine de la CCM`, logo: 'https://res.cloudinary.com/da4emp01n/image/upload/c_scale,w_200/v1602745430/logo_label_-_Copie_lmaip2.png', tags: ['Electron', 'Vue 2', 'Node.js', 'Tailwind CSS', 'Element UI', 'Webpack']},
          { name: 'Onigi', year: '2020', type: 'build', description: `Plateforme de vente de producteurs locaux à consommateurs`, logo: 'https://res.cloudinary.com/da4emp01n/image/upload/c_scale,w_200/v1602745181/icon_coarni.png', tags: ['Tailwind CSS', 'Vue 2', 'Nuxt', 'Strapi.js', 'Mongo DB', 'iView']},
          { name: 'MA Vitesse', year: '2019', type: 'public', description: `Outil de calcul intelligent de vitesse`, url:'http://ma-vitesse-dev.herokuapp.com/', logo: 'https://res.cloudinary.com/da4emp01n/image/upload/c_scale,w_10/v1602744686/logo.2e3abfc1_rscrzc.svg', tags: ['Tailwind CSS', 'Vue 2', 'Mongo DB', 'Heroku', 'PWA']},
          { name: 'Geckoop', year: '2019', type: 'public', description: `Outil de génération d'étiquettes pour l'épicerie coopérative rennaise Breizhicoop`, logo: 'https://res.cloudinary.com/da4emp01n/image/upload/c_scale,w_200/v1602744275/geckoop-logo_cyg625.png', url:'https://geckoop-dev.breizhicoop.fr/', tags: ['jQuery', 'Bulma', 'Django', 'Python', 'Odoo']},
          { name: 'Clinique du Droit Rouen', year: '2017', type: 'public', description: `Mise en place d'un site web pour une association étudiante`, logo: 'https://res.cloudinary.com/da4emp01n/image/upload/c_scale,w_200/v1602744457/logo_CDR_na4viw.png', url: 'https://www.cliniquedudroitrouen.fr', tags: ['Wordpress'] }
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

    .card {
        @apply bg-opacity-85 dark:bg-gray-800;
        backdrop-filter: blur(5px);
        z-index: 1;
    }
</style>
