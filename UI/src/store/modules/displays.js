import { defineStore } from 'pinia';
import { processSetPowerFeedback } from '../plugins/crestron/processMutation'; // Adjust import path as needed

// Define the displays store using Pinia.
export const useDisplaysStore = defineStore('displays', {
  // State of the store - initial state setup.
  state: () => ({
    // Object to keep track of display information.
    displayList: {
      display_1: {
        id: 'display_1', // Unique identifier for the first display.
        name: 'Left Display', // Human-readable name for the first display.
        power: false, // Initial power state (off) for the first display.
      },
      display_2: {
        id: 'display_2', // Unique identifier for the second display.
        name: 'Right Display', // Human-readable name for the second display.
        power: false, // Initial power state (off) for the second display.
      },
    },
  }),

  // Actions are methods used to change the state.
  actions: {
    // Sets the power feedback for a specific display.
    setPowerFeedback({ id, power }) {
      if (this.displayList[id]) {
        this.displayList[id].power = power; // Update the power state of the display.
      }
    },

    // Sets the power state for a specific display and processes the feedback.
    setPower({ id, power }) {
      processSetPowerFeedback(id, power); // External processing for setting power feedback.
      if (this.displayList[id]) {
        this.displayList[id].power = power; // Update the power state of the display.
      }
    },

    // ... other actions if needed
  },
});
