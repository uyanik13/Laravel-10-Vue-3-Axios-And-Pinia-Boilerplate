import "../sass/app.scss";
import { createApp } from 'vue';
import { createNotivue } from 'notivue'
// import { createPinia } from 'pinia'
import App from '@/App.vue';
import Router from '@/router/router.js';
import vSelect from 'vue-select'


import 'notivue/notifications.css' // Only needed if using built-in notifications
import 'notivue/animations.css' // Only needed if using built-in animations

const notivue = createNotivue({
    position: 'top-right',
    enqueue: true,
    limit:4,
    notifications: {
      global: {
        duration: 2500
      }
    }
  })
// const pinia = createPinia()
const app = createApp(App);

app.component('v-select', vSelect)
app.use(notivue)
app.use(Router);
// app.use(pinia)

app.mount('#app');
