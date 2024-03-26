<script setup lang="ts">
import axios from 'axios'
console.log(axios)
</script>

<template>
    <div>
        <div v-for="item in 4" :key="item" class="in">{{ item }}</div>
    </div>
</template>

<style scoped lang="scss">
.logo {
    width: 100px;
    height: 6em;
    padding: 1.5em;
    transition: filter 300ms;
    will-change: filter;
}

.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
