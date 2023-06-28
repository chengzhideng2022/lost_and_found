import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios' // 引入axios


axios.defaults.baseURL = 'http://localhost:8080' // 设置axios的默认基础URL

createApp(App).use(router).mount('#app')
