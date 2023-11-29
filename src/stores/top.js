import {defineStore} from 'pinia'
import {apiKey} from '@/url'
import axios from 'axios'

export const useTop = defineStore({
    id: 'top',
    state: ()=> ({
        url: 'https://api.themoviedb.org/3/movie/top_rated',
        top10: null
    }),
    actions: {
        async getTop(count){
            try {
                const res = await axios.get(`${this.url}?api_key=${apiKey}&language=ru-Ru`)
                let array = res.data.results;
                let data = [];
                array.forEach(item => {
                    if(data.length < count){
                        data.push(item)
                    }
                });
                this.top10 = data
            } catch (error) {
                console.log('Ошибка произошла при получении топовых фильмов', error);
            }
        }
    }
});