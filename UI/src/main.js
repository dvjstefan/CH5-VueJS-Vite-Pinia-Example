import './store/plugins/webxpanel.js'
import { createApp } from 'vue' // Import the function to create a Vue application instance
import './style.css' // Import the main stylesheet for the application
import App from './App.vue' // Import the root Vue component
import router from './router/router.js'; // Import the Vue Router configuration

import { createPinia } from 'pinia'; // Import the function to create a Pinia store instance, which is the state management library
import createCrestronPlugin from './store/plugins/crestron.js'; // Import a custom plugin for Crestron integration

const app = createApp(App); // Create a new Vue application instance with the root component
const pinia = createPinia(); // Create a new Pinia instance for state management

app.use(pinia); // Tell the Vue application to use the Pinia store
app.use(router); // Tell the Vue application to use the Vue Router

app.mount('#app'); // Mount the Vue application to the DOM element with the ID of 'app'

// Call the function to initialize Crestron communication

createCrestronPlugin();