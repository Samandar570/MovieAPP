import {defineStore} from 'pinia'
import {apiKey} from '@/url'
import axios from 'axios'

export const useItemById = defineStore({
    id: 'itemById',
    state: ()=> ({
        url: 'https://api.themoviedb.org/3/',
        movie: null,
        tv: null
    }),
    actions: {
        async getItemById({type, id}){
            try {
               const res = await axios.get(`${this.url}${type}/${id}?api_key=${apiKey}&language=ru-RU`)
               if(type == 'movie'){
                this.movie = res.data
               }
               else{
                this.tv = res.data
               }
            } catch (error) {
                console.log('Ошибка произошла при получении фильма или сериала по его id', error);
            }
        }
    }
});