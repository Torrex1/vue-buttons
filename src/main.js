import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import Home from './pages/Home.vue'
import Upload from './pages/UploadPage.vue'
import Buttons from './pages/Buttons.vue'

const app = createApp(App)

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'Home', component: Home},
        {path: '/upload-file', name: 'Upload', component: Upload},
        {path: '/buttons', name: 'Buttons', component: Buttons},
    ]
})

app.use(router)

app.mount('#app')

