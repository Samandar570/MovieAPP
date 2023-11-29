<template>
  <div class="loading">
    <div class="loading__spinner"></div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.loading {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    &__spinner {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 2px solid transparent;
        border-top: 2px solid green;
        animation: loader 1s infinite;
    }

    @keyframes loader {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
}
</style>