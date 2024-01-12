import { defineStore } from 'pinia';
import { processToggleZone, processSelectSource, processAnalogValue } from '../plugins/crestron/processMutation';

// Define the audio store using Pinia.
export const useAudioStore = defineStore('audio', {
  // State of the store - initial state setup.
  state: () => ({
    // Zones object to store the state of each zone.
    zones: {
      zone1: {
        id: 'zone1',
        name: 'Zone 1',
        isOn: false,
        sliderValue: 0,
        activeSource: 1,
      },
      zone2: {
        id: 'zone2',
        name: 'Zone 2',
        isOn: false,
        sliderValue: 0,
        activeSource: 1,
      },
      zone3: {
        id: 'zone3',
        name: 'Zone 3',
        isOn: false,
        sliderValue: 0,
        activeSource: 1,
      },
      zone4: {
        id: 'zone4',
        name: 'Zone 4',
        isOn: false,
        sliderValue: 0,
        activeSource: 1,
      },
      zone5: {
        id: 'zone5',
        name: 'Zone 5',
        isOn: false,
        sliderValue: 0,
        activeSource: 1,
      },
    },
  }),

  // Actions are methods used to change the state.
  actions: {
    // Sets the power feedback for a zone.
    setPowerFeedback({ id, power }) {
      if (this.zones[id]) {
        this.zones[id].isOn = power;
      }
    },

    // Toggles the power state of a zone.
    toggleZone(id) {
          processToggleZone(id); // External processing for toggling.
      if (this.zones[id]) {
        this.zones[id].isOn = !this.zones[id].isOn; // Toggle power state.
      }
    },

    // Sets the slider value (e.g., volume) for a zone.
    setSliderValue(id, value) {
      processAnalogValue(id, value); // External processing for the slider.
      if (this.zones[id]) {
        this.zones[id].sliderValue = value; // Update slider value.
      }
    },

    // Selects a source for a zone.
    selectSource(id, source) {
      processSelectSource(id, source); // External processing for selecting a source.
      if (this.zones[id]) {
        this.zones[id].activeSource = source; // Set the active source.
      }
    },

    // Other actions can be added here as needed.
  },
});
