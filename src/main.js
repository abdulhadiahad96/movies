import './@mock/db'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style.css'

// Create vue app
const app = createApp(App);

// Use plugins
app.use(router);
app.use(store);

// Mount vue app
app.mount('#app');