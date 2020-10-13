import { createStore } from 'vuex'

export const store = createStore({
    state () {
        return {
            values: [
                { name: 'Bienveillance', importance: 5 },
                { name: 'Curiosité', importance: 5 },
                { name: 'Passion', importance: 5 },
                { name: 'Durabilité', importance: 5 },
                { name: 'Persévérance', importance: 5 },
                { name: 'Écoute', importance: 5 },
                { name: 'Équilibre', importance: 5 },
                { name: 'Progression', importance: 5 },
                { name: 'Patience', importance: 5 },
                { name: 'Dynamisme', importance: 5 },
                { name: 'Écologie', importance: 5 },
                { name: 'Tentatives', importance: 5 },
                { name: 'Résilience', importance: 5 }
            ]
        }
    }
})
