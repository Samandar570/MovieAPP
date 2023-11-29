import {createRouter, createWebHistory} from 'vue-router'

import HomePage from '@/pages/HomePage.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {path: '/', name: 'homepage', component: HomePage},
        {path: '/movie', name: 'movie', component: ()=> import('@/pages/MoviesPage.vue')},
        {path: '/tv', name: 'tv', component: ()=> import('@/pages/TvsPage.vue')},
        {path: '/search', name: 'search', component: ()=> import('@/pages/SearchPage.vue')},
        {path: '/movie/:id', name: 'moviepage', component: ()=> import('@/pages/MoviePage.vue')},
        {path: '/tv/:id', name: 'tvpage', component: ()=> import('@/pages/TvPage.vue')},
    ],
    scrollBehavior(){
        return {
            top: 0
        }
    }
})

export default router