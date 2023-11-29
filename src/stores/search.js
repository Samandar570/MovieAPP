import {defineStore} from 'pinia'
import {apiKey} from '@/url'
import axios from 'axios'

export const useSearch = defineStore({
    id: 'search',
    state: ()=> ({
        url: 'https://api.themoviedb.org/3',
        result: null
    }),
    actions: {
        async searching(text){
            try {
                const res = await axios.get(`${this.url}/search/multi?api_key=${apiKey}&language=ru-RU&query=${text}`)
                this.result = res.data.results
            } catch (error) {
                console.log('Ошибка произошла при поиске данных', error);
            }
        }
    }
});