<template>
  <main class="main">
    <Media type="movie"/>
  </main>
</template>

<script setup>
import Media from '@/components/Media/Media.vue'
import { onUpdated, inject } from 'vue';

const reload = inject('reload')

onUpdated(()=> {
  reload()
})

</script>
