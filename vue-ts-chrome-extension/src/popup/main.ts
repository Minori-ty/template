/* JS files and framework components are HMR-ed */

import { createApp } from 'vue'
import Popup from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

console.log('Loaded popup/main.ts')
function download() {
  console.log('下载中...')
}

createApp(Popup).use(ElementPlus).mount('#app')
