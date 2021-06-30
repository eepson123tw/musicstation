import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from '@/js/axios.js'
import VueAxios from 'vue-axios'
import '@/assets/scss/main.scss'
import '@/assets/css/reset.css'

const app = createApp(App)
app.config.globalProperties.axios = axios
app.use(store).use(router).use(VueAxios, axios)

app.mount('#app')
