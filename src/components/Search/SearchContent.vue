<template>
  <router-link :to="item.media_type + '/' + item.id" class="main__search-list-item">
    <img
      v-lazy="imgUrlFull + item.backdrop_path"
      alt=""
      class="main__search-list-item-img"
    />
    <h2 class="main__search-list-item-name">{{ item.name || item.title }}</h2>
  </router-link>
</template>
  
<script setup>
import { imgUrlFull } from "@/url.js";
const props = defineProps(["item"]);
</script>
  