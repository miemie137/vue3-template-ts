import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'virtual:svg-icons-register';
import 'uno.css'
import { createPinia } from "pinia";
import 'element-plus/theme-chalk/dark/css-vars.css'

createApp(App).use(createPinia()).mount('#app')
