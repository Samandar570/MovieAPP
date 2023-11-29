<template>
  <div class="main__upcoming" v-if="getUpcomingMovies">
    <UpcomingItem
    v-for="(movie, idx) in getUpcomingMovies"
    :key="movie.id"
    :movie="movie"
    :idx="idx"
    :slideView="slideView"
    :nexMovie="getUpcomingMovies[idx + 1 == getUpcomingMovies.length ? 0 : idx + 1]"
    @slideNext="slideNext"
    />
  </div>
  <Loader v-else/>
</template>

<script setup>
    import UpcomingItem from '@/components/Upcoming/UpcomingItem.vue'
    import {useUpcoming} from '@/stores/upcoming'
    import { computed, ref, onMounted } from 'vue'

    const upcomingStore = useUpcoming()
    upcomingStore.getUpcoming()

    let slideView = ref(0)
    let timeout = ref(null)

    const getUpcomingMovies = computed(()=> upcomingStore.upcoming)

    const slide = ()=>{
      if(getUpcomingMovies.value.length -1 == slideView.value){
        slideView.value = 0
      }else{
        slideView.value++
      }
      timeout = setTimeout(() => slide(), 7000);
    }

    const slideNext = ()=> {
      clearTimeout(timeout)
      slide()
    }

    onMounted(()=> timeout = setTimeout(() => slide(), 7000));
</script>
