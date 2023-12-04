import { defineStore } from 'pinia';

// Define the global settings store using Pinia.
export const useGlobalSettingStore = defineStore('globalSetting', {
  // State of the store - initial state setup.
  state: () => ({
    systemName: '', // A variable to store the name of the system.
    // other global states can be added here as needed
  }),

  // Actions are methods used to change the state.
  actions: {
    // Sets the system name.
    setSystemName(name) {
      this.systemName = name; // Update the system name in the state.
    },
    // other global actions can be defined here to manipulate the global state
  },

  // Getters can be added here for computed state based on the current state.
  // getters: {
  //   ...
  // },
});
