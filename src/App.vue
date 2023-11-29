<template>
  <div class="wrapper">
    <Navbar/>
    <router-view v-if="routerAlive"/>
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar/Navbar.vue'
import { ref, provide, nextTick } from 'vue'

let routerAlive = ref(true)

const reload = () => {
  routerAlive.value = false
  nextTick(() => routerAlive.value = true)
}

provide('reload', reload)

</script>
