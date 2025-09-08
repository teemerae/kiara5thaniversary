import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import 'aos/dist/aos.css'

import { createApp } from 'vue'
import { createBootstrap } from 'bootstrap-vue-next/plugins/createBootstrap'
import App from './App.vue'
import AOS from 'aos'

const app = createApp(App)
app.use(createBootstrap()) // Important
app.mount('#app')
