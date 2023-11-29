<template>
  <router-link :to="`${type}/${id}`" class="btn__more">
    <img src="@/assets/images/more.svg" alt="" class="btn__more-img" />
    <span class="btn__more-text">Подробнее</span>
  </router-link>
</template>

<script setup>

const props = defineProps({
  type: String,
  id: Number
})
</script>

<style lang="scss" scoped>
.btn__more {
  width: max-content;
  background: #149a03;
  border-radius: 10px;
  padding: 10px 15px;
  display: flex;
  column-gap: 15px;
  row-gap: 15px;
  align-items: center;
  &-text {
    font-size: 20px;
    line-height: 150%;
    color: #fff;
  }
}
</style>