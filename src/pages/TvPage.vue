<template>
  <main class="main">
    <Media type="tv" />
  </main>
</template>
  
  <script setup>
import Media from "@/components/Media/Media.vue";
import { onUpdated, inject } from "vue";

const reload = inject("reload");

onUpdated(() => {
  reload();
});
</script>
  