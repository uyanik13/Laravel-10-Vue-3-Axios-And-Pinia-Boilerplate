import "../sass/app.scss";
import { createApp } from 'vue';
import { createPinia } from 'pinia'
import App from '@/App.vue';
import Router from '@/router/router.js';


const pinia = createPinia()
const app = createApp(App);
app.use(Router);
app.use(pinia)
app.mount('#app');
