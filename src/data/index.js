export const skills = [
    {name: 'Python', type: 'technical', stars: 3},
    {name: 'Javascript', type: 'technical', stars: 4},
    {name: 'Vue 2', type: 'technical', stars: 4},
    {name: 'Vue 3', type: 'technical', stars: 3},
    {name: 'TailwindCSS', type: 'technical', stars: 4},
    {name: 'Node.js', type: 'technical', stars: 3.5},
    {name: 'Electron', type: 'technical', stars: 3.5},
    {name: 'Strapi', type: 'technical', stars: 3},
    {name: 'Wordpress', type: 'technical', stars: 3},
    {name: 'Agilité', type: 'project', stars: 3.5},
    {name: 'Git', type: 'project', stars: 3.5},
    {name: 'Gitlab', type: 'project', stars: 3.5},
    {name: 'HTML', type: 'technical', stars: 4},
    {name: 'CSS/SCSS', type: 'technical', stars: 4},
    {name: 'Communication non violente', type: 'human', stars: 4},
    {name: 'Créativité', type: 'human'},
    {name: 'Chiffrage', type: 'project'},
    {name: 'Curiosité', type: 'human'},
    {name: 'Responsabilité', type: 'human'},
    {name: 'Organisation', type: 'human'},
    {name: 'Esprit critique', type: 'human'},
    {name: 'Autonomie', type: 'human'},
    {name: 'Esprit d\'équipe', type: 'human'},
    {name: 'Relation client', type: 'project'},
    {name: 'Qualité', type: 'project'},
    {name: 'Industrialisation', type: 'project'},
    {name: 'Planification', type: 'project'},
    {name: 'Encadrement', type: 'project'},
    {name: 'Typescript', type: 'technical', stars: 2},
    {name: 'GraphQL', type: 'technical', stars: 2},
    {name: 'React', type: 'technical', stars: 2.5},
    {name: 'Gatsby', type: 'technical', stars: 2}
]

export const projects = [
    {
        name: 'Portfolio',
        year: '2020',
        description: `Présentation de mon profil, de mes compétences et de ma philosophie`,
        tags: ['Vue 3', 'Typescript', 'Tailwind CSS', 'Vitejs'],
        logo: false,
        githubUrl: 'https://github.com/ArthurBri/arthur-briere'
    },
    {
        name: 'Vinaigre',
        year: '2020',
        type: 'build',
        description: `Application de gestion des tâches quotidiennes`,
        logo: 'https://res.cloudinary.com/da4emp01n/image/upload/c_scale,w_200/v1602745084/logo-vinaigre_udqhxc.png',
        tags: ['Vue 3', 'Node.js', 'Tailwind CSS']
    },
    {
        name: 'Compote',
        year: '2020',
        type: 'private',
        description: `Init., dév et lead d'un projet d'industrialisation dans le domaine de la CCM`,
        logo: 'https://res.cloudinary.com/da4emp01n/image/upload/c_scale,w_200/v1602745430/logo_label_-_Copie_lmaip2.png',
        tags: ['Electron', 'Vue 2', 'Node.js', 'Tailwind CSS', 'Element UI', 'Webpack']
    },
    {
        name: 'Onigi',
        year: '2020',
        type: 'build',
        description: `Plateforme de vente de producteurs locaux à consommateurs`,
        logo: 'https://res.cloudinary.com/da4emp01n/image/upload/c_scale,w_200/v1602745181/icon_coarni.png',
        tags: ['Vue 2', 'Nuxt', 'Strapi.js', 'Mongo DB', 'Tailwind CSS', 'iView']
    },
    {
        name: 'MA Vitesse',
        year: '2020',
        type: 'public',
        description: `Outil de calcul intelligent de vitesse`,
        url: 'http://ma-vitesse-dev.herokuapp.com/',
        githubUrl: 'https://github.com/ArthurBri/ma-vitesse',
        logo: 'https://res.cloudinary.com/da4emp01n/image/upload/c_scale,w_10/v1602744686/logo.2e3abfc1_rscrzc.svg',
        tags: ['Vue 2', 'Mongo DB', 'Tailwind CSS', 'Heroku', 'PWA']
    },
    {
        name: 'Geckoop',
        year: '2019',
        type: 'public',
        description: `Outil de génération d'étiquettes pour l'épicerie coopérative rennaise Breizhicoop`,
        logo: 'https://res.cloudinary.com/da4emp01n/image/upload/c_scale,w_200/v1602744275/geckoop-logo_cyg625.png',
        url: 'https://geckoop-dev.breizhicoop.fr/',
        tags: ['Python', 'Django', 'jQuery', 'Bulma', 'Odoo']
    },
    {
        name: 'Clinique du Droit Rouen',
        year: '2017',
        type: 'public',
        description: `Mise en place d'un site web pour une association étudiante`,
        logo: 'https://res.cloudinary.com/da4emp01n/image/upload/c_scale,w_200/v1602744457/logo_CDR_na4viw.png',
        url: 'https://www.cliniquedudroitrouen.fr',
        tags: ['Wordpress']
    }
]

export const experiences = [
    {
        name: `Europ'Raid`,
        type: 'experience',
        year: '2017',
        description: `Récolte de 6000€ pour un 4L Trophy like à travers 23 pays d'Europe en 3 semaines.`,
        tags: ['Gestion de projet', 'Voyage']
    },
    {
        name: `Tutorat`,
        type: 'experience',
        year: '2020',
        description: `Tuteur de stage sur un projet initié en interne chez Sword.`,
        tags: ['Gestion de projet', `Travail d'équipe`]
    },
    {
        name: `Photographie`,
        type: 'interest',
        description: `Passion pour les couleurs, les formes et les harmonies. Photographies de voyage, de bâtiments ou de grand espaces.`
    },
    {
        name: `Minimalisme`,
        type: 'interest',
        description: `A la recherche de simplicité matérielle et dans mes projets numériques.`
    },
    {name: `Running`, type: 'interest', description: `Je cours régulièrement. Inscrit au Marathon de Paris 2021.`},
    {
        name: `Culture tech`,
        type: 'interest',
        description: `Je suis les trends et me forme en continu. Actuellement en approfondissement sur Jest, TDD, et Typescript.`
    },
]

export const values = [
    {name: 'Bienveillance', importance: 5},
    {name: 'Curiosité', importance: 5},
    {name: 'Passion', importance: 5},
    {name: 'Durabilité', importance: 5},
    {name: 'Persévérance', importance: 5},
    {name: 'Écoute', importance: 5},
    {name: 'Équilibre', importance: 5},
    {name: 'Progression', importance: 5},
    {name: 'Patience', importance: 5},
    {name: 'Dynamisme', importance: 5},
    {name: 'Écologie', importance: 5},
    {name: 'Tentatives', importance: 5},
    {name: 'Résilience', importance: 5}
]

export const presentation = `
Développeur en cours d'<span class="animate-text">expertise</span> sur les technos JavaScript. Passionné par les belles  <span class="animate-text">interfaces</span> et les <span class="animate-text">expériences</span> utilisateurs, je travaille également sur des projets <span class="animate-text">NodeJS</span>.
J'aime réfléchir à des <span class="animate-text">solutions</span>, et ma motivation est exacerbée lorsque mes projets traitent de sujets <span class="animate-text">environnementaux</span> ou de progrès sociétaux. Je suis toujours déterminé à résoudre des 
problèmes, en essayant de proposer des biais <span class="animate-text">innovants</span>. Mon état d'esprit se construit autour du "Less is more".`


