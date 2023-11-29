<template>
  <div class="main__media" v-if="item">
    <Intro :type="type" :item="item"/>
    <Info :item="item"/>
    <Rec :type="type" :rec="rec" />
  </div>
  <Loader v-else/>
</template>

<script setup>
import Intro from './Intro.vue'
import Info from './Info.vue'
import Rec from './Rec.vue'
import './Media.scss'
import { useItemById } from '@/stores/itemById.js'
import { useRoute } from 'vue-router'
import { useRec } from '@/stores/rec.js'
import { computed, onBeforeUnmount } from 'vue'

const route = useRoute()

const recStore = useRec()
const itemStore = useItemById()

const props = defineProps({
  type: String
})

recStore.getRecom({type: props.type, id: route.params.id})
itemStore.getItemById({type: props.type, id: route.params.id})

const item = computed(()=> props.type == 'movie' ? itemStore.movie : props.type == 'tv' ? itemStore.tv : '')
const rec = computed(()=> {
  let array = props.type == 'movie' ? recStore.recomMovie : props.type == 'tv' ? recStore.recomTv : ''
  if (array) {
    return array.slice(0, 4)
  }
})

onBeforeUnmount(()=> {
  itemStore.movie = itemStore.tv = null
})
</script> 

