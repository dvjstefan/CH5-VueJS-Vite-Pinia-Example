import { defineStore } from 'pinia';
import { processIncrement, processDecrement } from '../plugins/crestron/processMutation';

// Define the counter store using Pinia.
export const useCounterStore = defineStore('counter', {
    // State of the store - initial state setup.
    state: () => ({
        // Value to keep track of the counter.
        value: 0,
    }),
    
    // Actions are methods used to change the state.
    actions: {
        // Increments the counter value by 1.
        incrementCounter() {
            processIncrement(); // External processing before incrementing.
            this.value++; // Increment the counter value.
        },

        // Decrements the counter value by 1.
        decrementCounter() {
            processDecrement(); // External processing before decrementing.
            this.value--; // Decrement the counter value.
        },

        // Sets the counter to a new value.
        setCounter(newValue) {
            this.value = newValue; // Update the counter value to the new value.
        },
    },
});
