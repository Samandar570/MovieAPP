<template>
  <div class="main__search">
    <div class="container">
      <input
        type="text"
        class="main__search-input"
        placeholder="Найти фильм, сериал..."
        v-model="text"
      />
      <div class="main__search-list" v-if="searchArray">
        <SearchContent
          v-for="item in searchArray"
          :key="item.id"
          :item="item"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import "./Search.scss";
import SearchContent from "./SearchContent.vue";
import { ref, computed, watch } from "vue";
import { useSearch } from "@/stores/search.js";

const searchStore = useSearch();

const text = ref("");

const searchArray = computed(() => searchStore.result);

let timer = null;

watch(text, (val) => {
  clearTimeout(timer);
  timer = setTimeout(() => {
    searchStore.searching(val);
  }, 500);
})
</script>
