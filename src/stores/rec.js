import {defineStore} from 'pinia'
import {apiKey} from '@/url'
import axios from 'axios'

export const useRec = defineStore({
    id: 'rec',
    state: ()=> ({
        url: 'https://api.themoviedb.org/3/',
        recomMovie: null,
        recomTv: null
    }),
    actions: {
        async getRecom({type, id}){
            try {
               const res = await axios.get(`${this.url}${type}/${id}/recommendations?api_key=${apiKey}&language=ru-RU`)
               if(type == 'movie'){
                this.recomMovie = res.data.results
               }
               else{
                this.recomTv = res.data.results
               }
            } catch (error) {
                console.log('Ошибка произошла при получении рекомендаций', error);
            }
        }
    }
});