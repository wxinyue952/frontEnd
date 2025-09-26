import { createApp } from 'vue'
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

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ArcoVue)

app.mount('#app')
app.config.globalProperties.$message = Message
