<template>
  <div class="main__intro">
    <img v-lazy="imgUrlFull + item.poster_path" alt="" class="main__intro-poster">
    <div class="main__intro-block">
        <div class="main__intro-block-left">
            <h1 class="main__intro-block-left-title">{{ item.title || item.name }}</h1>
            <p class="main__intro-block-left-text">{{ item.overview || 'Нет описания' }}</p>
            <p class="main__intro-block-left-descr">
              <span>{{ getYear }}</span>
              <span>{{ getGenres }}</span>
              <span>{{ getTime }}</span>
            </p>
            <Trailer/>
        </div>
        <div class="main__intro-block-right">
            <img v-lazy="imgUrlFull + item.backdrop_path" alt="" class="main__intro-block-right-img">
        </div>
        <div class="main__intro-actors">
          <h2 class="main__intro-actors-title">В главных ролях</h2>
          <Actors :type="type" :id="item.id" count="6"/>
        </div>
    </div>
  </div>
</template>

<script setup>

import { imgUrlFull } from '@/url.js'
import { computed } from 'vue'


const props = defineProps({
  type: String,
  item: Object
})

const getYear = computed(()=> new Date(props.item.release_date).getFullYear() || new Date(props.item.first_air_date).getFullYear() )

const getGenres = computed(()=> props.item.genres.reduce((acc, item) => acc + `, ${item.name}`, ''))

const getTime = computed(()=>  {
  if(props.type == 'tv' && props.item.episode_run_time.length == 0){
    return ''
  }
  let minutes = 
  props.type == 'movie' ? props.item.runtime :
  props.type == 'tv' ? props.item.episode_run_time[0] : '';
  let hours = Math.floor(minutes / 60) 
  let leftMinetes = minutes % 60
  if(hours == 0){
    return `${leftMinetes}m`
  }else {
    return `${hours}h ${leftMinetes}m`
  }

})

  
</script>
