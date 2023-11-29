import {defineStore} from 'pinia'
import {apiKey} from '@/url'
import axios from 'axios'

export const useUpcoming = defineStore({
    id: 'upcoming',
    state: ()=> ({
        url: 'https://api.themoviedb.org/3/movie/upcoming',
        upcoming: null
    }),
    actions: {
        async getUpcoming(){
            try {
                const res = await axios.get(`${this.url}?api_key=${apiKey}&language=ru-Ru`)
                this.upcoming = res.data.results
            } catch (error) {
                console.log('Ошибка произошла при получении предстоящих фильмов', error);
            }
        }
    }
});