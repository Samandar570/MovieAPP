import {defineStore} from 'pinia'
import {apiKey} from '@/url'
import axios from 'axios'

export const useActors = defineStore({
    id: 'actors',
    state: ()=> ({
        url: 'https://api.themoviedb.org/3/',
        actorMovie: null,
        actorTv: null
    }),
    actions: {
        async getActors({type, id}){
            try {
                let res = await axios.get(`${this.url}${type}/${id}/credits?api_key=${apiKey}&language=ru-RU`)
                let actors = res.data.cast
                if(type == 'movie'){
                    this.actorMovie = actors
                }
                else{
                    this.actorTv = actors
                }
            } catch (error) {
                console.log('Ошибка произошла при получении актеров', error);
            }
        }
    },
    getters: {
        getActorsMovie(state){
            return function(count){
                if(state.actorMovie){
                    return state.actorMovie.slice(0,count)
                }
            }
        },
        getActorsTv(state){
            return function(count){
                if(state.actorTv){
                    return state.actorTv.slice(0,count)
                }
            }
        }
    }
});