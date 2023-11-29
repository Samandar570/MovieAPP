<template>
  <div class="container" v-if="content">
    <div class="main__content">
      <h2 class="main__content-title">
        {{ type == "movie" ? "Все фильмы" : "Все сериалы" }}
      </h2>
      <div class="main__content-list">
        <ContentItem 
        v-for="item in content"
        :key="item.id"
        :item="item"
        :type="type"
        />
      </div>
      <Pagination 
      :currentPage="currentPage" 
      :totalPages="totalPages"
      @page="changePage"
      />    
    </div>
  </div>
</template>

<script setup>
import ContentItem from "@/components/Content/ContentItem.vue";
import Pagination from "@/components/UI/Pagination.vue";
import { usePopular } from "@/stores/popular.js";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter()

const props = defineProps(["type"]);
const popularStore = usePopular()

const currentPage = ref(1)
const totalPages = ref(500)

popularStore.getPopular({type: props.type, page: 1})

const content = computed(()=> props.type == 'movie' ?  popularStore.popularMovies : popularStore.popularTvs)

const changePage = async (newPage)=> {
    currentPage.value = newPage
    await popularStore.getPopular({type: props.type, page: currentPage.value})
    router.push({name: props.type, query: {page: currentPage.value}})
}
</script>
