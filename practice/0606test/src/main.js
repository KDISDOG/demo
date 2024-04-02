import './assets/main.css'
import HelloSam from './components/HelloSam.vue'
import { createApp } from 'vue'
import App from './App.vue'

const app=createApp(App)

app.component("HelloSam",HelloSam)

app.mount('#app')
