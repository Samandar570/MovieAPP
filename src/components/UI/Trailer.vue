<template>
    <router-link to="/" class="trailer">
      <img src="@/assets/images/more.svg" alt="" class="trailer__img" />
      <span class="trailer__text">Смотерть трейлер</span>
    </router-link>
  </template>
  
  <script setup>
 
  </script>
  
  <style lang="scss" scoped>
  .trailer {
    width: max-content;
    background: #149a03;
    border-radius: 10px;
    padding: 10px 15px;
    display: flex;
    column-gap: 15px;
    row-gap: 15px;
    align-items: center;
    &__text {
      font-size: 20px;
      line-height: 150%;
      color: #fff;
    }
  }
  </style>