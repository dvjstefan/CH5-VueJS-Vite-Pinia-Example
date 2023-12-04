// The main entry point for the Pinia stores.
// Pinia is the state management library for Vue applications.

// Importing the functions to create a Pinia instance and define a store
import { createPinia, defineStore } from 'pinia';
// Importing store hooks that allow the use of individual stores
import { useCounterStore } from './modules/counter';
import { useDisplaysStore } from './modules/displays';
// Importing the Crestron plugin which likely integrates Crestron hardware functionality with the store
import createCrestronPlugin from './plugins/crestron';

// Creating a new Pinia instance which acts as the central store for the application
const pinia = createPinia();

// Utilizing the 'use' method of Pinia to apply the Crestron plugin to the store.
pinia.use(createCrestronPlugin);

// Exporting the configured Pinia instance to be used in the main.js file
// This is where the application's state management begins
export default pinia;

