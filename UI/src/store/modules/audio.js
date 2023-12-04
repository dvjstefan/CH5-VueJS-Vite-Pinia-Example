import { defineStore } from 'pinia';
import { processToggleZone, processSelectSource, processAnalogValue } from '../plugins/crestron/processMutation';

// Define the audio store using Pinia.
export const useAudioStore = defineStore('audio', {
  // State of the store - initial state setup.
  state: () => ({
    // Zones object to store the state of each zone.
    zones: {}, // Start with an empty object.
  }),

  // Actions are like methods used to change the state.
  actions: {
    // Initializes the zones based on a given number.
    initializeZones(numberOfZones) {
      this.zones = {}; // Reset zones to an empty state.
      for (let i = 1; i <= numberOfZones; i++) {
        // Create each zone with default settings.
        this.zones[`zone${i}`] = this.createZoneDefaults(i);
      }
    },

    // Helper method to create default settings for a zone.
    createZoneDefaults(id) {
      return {
        id: `zone${id}`, // Unique identifier for the zone.
        name: `Zone ${id}`, // Default name for the zone.
        isOn: false, // Initial power state.
        sliderValue: 0, // Initial slider value (e.g., volume).
        activeSource: null, // Initial active source.
      };
    },

    // Sets the power feedback for a zone.
    setPowerFeedback({ id, power }) {
      // Check if the zone exists before setting power state.
      if (this.zones[id]) {
        this.zones[id].isOn = power;
      }
    },

    // Toggles the power state of a zone.
    toggleZone(id) {
      processToggleZone(id); // External processing for toggling.
      // Check if the zone exists before toggling.
      if (this.zones[id]) {
        this.zones[id].isOn = !this.zones[id].isOn; // Toggle power state.
      }
    },

    // Sets the slider value (e.g., volume) for a zone.
    setSliderValue(id, value) {
      processAnalogValue(id, value); // External processing for the slider.
      // Check if the zone exists before setting the slider value.
      if (this.zones[id]) {
        this.zones[id].sliderValue = value; // Update slider value.
      }
    },

    // Selects a source for a zone.
    selectSource(id, source) {
      processSelectSource(id, source); // External processing for selecting a source.
      // Check if the zone exists before setting the active source.
      if (this.zones[id]) {
        this.zones[id].activeSource = source; // Set the active source.
      }
    },
  },
});
