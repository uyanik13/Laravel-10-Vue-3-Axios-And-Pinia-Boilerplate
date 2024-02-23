import "../sass/app.scss";
import { createApp } from 'vue';
// import { createPinia } from 'pinia'
import App from '@/App.vue';
import Router from '@/router/router.js';
import { createNotivue } from 'notivue'

import 'notivue/notifications.css' // Only needed if using built-in notifications
// import 'notivue/animations.css' // Only needed if using built-in animations

const notivue = createNotivue({
    position: 'top-right',
    limit: 4,
    enqueue: true,
    notifications: {
      global: {
        duration: 2500
      }
    }
  })
// const pinia = createPinia()
const app = createApp(App);
app.use(Router);
// app.use(pinia)
app.use(notivue)
app.mount('#app');
