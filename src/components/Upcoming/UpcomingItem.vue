<template>
  <Transition name="upcoming-item">
  <div class="main__upcoming-item" v-if="slideView == idx">
    <img :src="imgUrlFull + movie.backdrop_path" alt="" class="main__upcoming-item-img">
    <div class="main__upcoming-item-content">
        <h1 class="main__upcoming-item-content-title">{{movie.title}}</h1>
        <p class="main__upcoming-item-content-text">{{ movie.overview || 'К данному фильму не добавлено описание'}}</p>
        <BtnMore type="movie" :id="movie.id"/>
    </div>
    <div class="main__upcoming-item-next" @click="$emit('slideNext')">
      <img :src="imgUrl + nexMovie.backdrop_path" alt="" class="main__upcoming-item-next-img">
      <div class="main__upcoming-item-next-content">
        <span>Следующий</span>
        <h2>{{nexMovie.title}}</h2>
      </div>
    </div>
  </div>
</Transition>
</template>

<script setup>
  import {imgUrlFull, imgUrl} from '@/url.js'
  const props = defineProps({
    movie: {
      type: Object
    },
    idx: {
      type: Number
    },
    slideView: {
      type: Number
    },
    nexMovie: {
      type: Object
    }
  })

</script>
