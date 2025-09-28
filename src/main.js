import { createApp } from 'vue'
// 引入 Pinia 状态持久化插件
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 引入 Arco 组件库
import ArcoVue from '@arco-design/web-vue'
import '@arco-design/web-vue/dist/arco.css'
import { Message } from '@arco-design/web-vue'

import '@/styles/normalize.css'
// 导入Unocss样式
import 'uno.css'
// 公共样式
//import '@/assets/css/index.css'

import { getConfig } from '@/config/index'
import { resetConfig } from '@/config/index'
resetConfig()
console.log(getConfig('github'))
console.log(getConfig('appCode'))
console.log(getConfig('projectName'))
console.log(import.meta.env.VITE_APP_ENV)

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(createPinia())
app.use(router)
app.use(ArcoVue)

app.mount('#app')
app.config.globalProperties.$message = Message
