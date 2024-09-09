import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createApp } from 'vue'
import App from './App.vue'
import { i18n } from './locales'
import './style.css'

createApp(App).use(ElementPlus).use(i18n).mount('#app')
