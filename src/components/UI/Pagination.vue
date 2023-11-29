<template>
  <div class="pagination">
    <button @click="$emit('page', currentPage - 1)" :disabled="currentPage == 1">back</button>
    <span>Страница {{ currentPage }} - {{ totalPages }}</span>
    <button @click="$emit('page', currentPage + 1)" :disabled="currentPage == totalPages">next</button>
  </div>
</template>

<script setup>
const props = defineProps(['currentPage', 'totalPages'])

</script>

<style lang="scss" scoped>
    .pagination {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 30px;
        margin-top: 50px;
    }

    button {
        padding: 5px 15px;
        text-transform: uppercase;
    }

    span {
        color: white;
        font-size: 30px;
    }

</style>