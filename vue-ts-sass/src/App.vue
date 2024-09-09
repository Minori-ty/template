<script setup lang="ts">
import.meta.env.BASE_URL
import { getLocale, i18n } from '@/locales'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const currentLocale = ref(locale.value)
const options = ref<
    {
        value: string
        label: string
    }[]
>([])

async function init() {
    options.value = await getLocale()
}
init()
function change(value: 'zh-CN') {
    console.log(value)
    i18n.global.locale.value = value
}
console.log(import.meta.env.VITE_BASE_URL)
</script>

<template>
    <div>
        <div v-for="item in 4" :key="item" class="in">{{ item }}</div>
    </div>
    <div>
        <h1>vue-i18n</h1>
        <el-select v-model="currentLocale" @change="change">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
        <h2>{{ $t('login') }}</h2>
        <h2>{{ $t('about') }}</h2>
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
