<template>
    <div class="flex flex-wrap items-center justify-between mt-12 mx-8 md:mx-4 m-4">
        <div class="py-1 text-2xl font-bold text-white border-b-6 leading-none mr-4">Compétences</div>
        <div class="flex inline-block relative overflow-auto text-white mt-2">
            <span @click="skillsTypeFilter = null" :class="{'selected': !skillsTypeFilter }" class="relative filter-item mr-4 cursor-pointer">Toutes</span>
            <span @click="skillsTypeFilter = 'technical'" :class="{'selected': skillsTypeFilter === 'technical' }"  class="relative filter-item mr-4 cursor-pointer">Techniques</span>
            <span @click="skillsTypeFilter = 'human'" :class="{'selected': skillsTypeFilter === 'human' }" class="relative filter-item mr-4 cursor-pointer">Humaines</span>
            <span @click="skillsTypeFilter = 'project'" :class="{'selected': skillsTypeFilter === 'project' }" class="relative filter-item mr-4 cursor-pointer">Projet</span>
        </div>
    </div>
    <div class="flex justify-start flex-wrap">
        <div class="flex items-center bg-white rounded-lg shadow-lg mx-2 mb-2 p-2 dark:bg-gray-800 dark:text-white bg-gradient-to-br dark:from-gray-700 dark:to-gray-600" v-for="(skill, index) in filteredSKills"
             :key="index">
            <div class="flex items-center justify-center">
                <span class="font-semibold mr-4">{{ skill.name }}</span>
                <div class="flex">
                    <div class="text-left" v-for="index in skill.stars" :key="index">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-star" width="20"
                             height="20" viewBox="0 0 24 24" stroke-width="1" stroke="#009688" fill="none"
                             stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z"/>
                            <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Projects',
        data() {
            return {
                skills: [
                    {name: 'Développement', type: 'technical', stars: 4},
                    {name: 'Agilité', type: 'project', stars: 3},
                    {name: 'Communication non violente', type: 'human', stars: 4}
                ],
                skillsTypeFilter: null,
            }
        },
        computed: {
            filteredSKills () {
                if (!this.skillsTypeFilter) { return this.skills }
                else {
                    return this.skills.filter(skill => skill.type === this.skillsTypeFilter)
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
</style>
