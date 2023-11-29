<template>
  <nav class="nav" :class="{color: scrollValue > 0}" id="navbar">
    <div class="container">
      <div class="nav__box">
        <router-link to="/" class="logo">
          <img src="@/assets/images/Logo.svg" alt="" />
        </router-link>
        <button class="nav__menu" @click="burger = true">
          <img src="@/assets/images/menu.svg" alt="">
        </button>
        <ul class="nav__box-list" :class="{active: burger}">
          <button class="nav__close" @click="burger = false">
            <img src="@/assets/images/closeMenu.png" alt="">
          </button>
          <li v-for="link in links" :key="link.title">
            <router-link @click="burger = false" :to="link.url" class="nav__box-list-link">
              {{ link.title }}
            </router-link>
          </li>
          <li>
            <router-link @click="burger = false" to="/search" class="nav__box-list-link">
                <img src="@/assets/images/search.svg" alt="" />
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>

import {ref} from 'vue'

const burger = ref(false);
const scrollValue = ref(0)

const links = ref([
    {title: 'Главная', url: '/'},
    {title: 'Фильмы', url: '/movie'},
    {title: 'Сериалы', url: '/tv'},
]);

window.addEventListener('scroll', ()=> scrollValue.value = window.scrollY)

</script>
