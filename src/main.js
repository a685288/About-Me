import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/sass/_variables.sass'
import '@/assets/sass/reset.scss'

createApp(App).use(router).mount('#app')