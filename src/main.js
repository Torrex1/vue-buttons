import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import Home from './pages/Home.vue'
import Second from './pages/Second.vue'
import Buttons from './pages/Buttons.vue'

const app = createApp(App)

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'Home', component: Home},
        {path: '/second', name: 'Second', component: Second},
        {path: '/buttons', name: 'Buttons', component: Buttons},
    ]
})

app.use(router)

app.mount('#app')

