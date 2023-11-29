import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/styles/main.scss'
import BtnMore from '@/components/UI/BtnMore.vue'
import Loader from '@/components/UI/Loader.vue'
import Actors from '@/components/UI/Actors.vue'
import Trailer from '@/components/UI/Trailer.vue'

import router from '@/router/index.js'
import {createPinia} from 'pinia'

import VueLazyload from 'vue-lazyload'
import errorImage from '@/assets/images/error.png'

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
app.use(VueLazyload, {
    error: errorImage
})

app.use(router)
app.component('BtnMore', BtnMore)
app.component('Loader', Loader)
app.component('Actors', Actors)
app.component('Trailer', Trailer)

app.mount('#app')
