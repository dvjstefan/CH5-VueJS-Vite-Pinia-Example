import { createMemoryHistory, createWebHistory, createRouter } from 'vue-router';
import CrComLib from '@crestron/ch5-crcomlib/build_bundles/cjs/cr-com-lib'; // Ensure this import path is correct
import Home from '../views/Home.vue';
import Displays from '../views/Displays.vue';
import Audio from '../views/Audio.vue';

// Define your routes
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/Displays',
        name: 'Displays',
        component: Displays,
    },
    {
        path: '/Audio',
        name: 'Audio',
        component: Audio,
    }
];

// Determine which history mode to use based on the environment
//const history = CrComLib.isCrestronTouchscreen()
//  ? createMemoryHistory()
//  : createWebHistory();

// Create the router instance
 const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
