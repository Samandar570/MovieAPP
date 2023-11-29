<template>
  <div class="main__info-block-actors actors" v-if="actors">
    <div
      class="main__info-block-actors-item"
      v-for="actor in actors"
      :key="actor.id"
    >
      <img v-lazy="imgUrl + actor.profile_path" alt="" />
      <span>{{ actor.name }}</span>
    </div>
  </div>
</template>

<script setup>
import { useActors } from "@/stores/actors.js";
import { computed } from "vue";
import { imgUrl } from "@/url.js";

const props = defineProps(["type", "id", "count"]);

const actorsStore = useActors();

actorsStore.getActors({ type: props.type, id: props.id });

const actors = computed(() =>
  props.type == "movie"
    ? actorsStore.getActorsMovie(props.count)
    : actorsStore.getActorsTv(props.count)
);
</script>

<style lang="scss" scoped>
.main__info-block-actors {
    max-width: 450px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    &-item {
        border: 1px solid #fff;
        border-radius: 25px;
        padding-right: 15px;
        display: flex;
        align-items: center;
        gap: 10px;

        & img {
            width: 45px;
            height: 50px;
            border-radius: 50px;
            object-fit: cover;
        }
        & span {
            font-size: 16px;
            line-height: 30px;
            color: #fff;
        }
    }
}
</style>