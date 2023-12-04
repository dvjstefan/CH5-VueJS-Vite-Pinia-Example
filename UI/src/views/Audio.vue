<template>
  <div class="zones-container">
    <div class="zone" v-for="zone in zones" :key="zone.id">
      <!-- Zone Name and Select Source Text -->
      <div class="zone-header">
        <div class="zone-name">{{ zone.name }}</div>
        <div class="select-source">Select Source</div>
      </div>

      <!-- Toggle Button, Slider, and Action Buttons -->
      <div class="zone-controls">
        <button
          class="toggle-button btn-default"
          :class="{ green: zone.isOn, red: !zone.isOn }"
          @click="toggleZone(zone.id)"
        >
          {{ zone.isOn ? "ON" : "OFF" }}
        </button>
        <input
          type="range"
          :value="zone.sliderValue"
          @input="updateSlider(zone.id, $event.target.value)"
          min="0"
          max="100"
          class="horizontal-slider"
        />
        <div class="action-buttons">
          <button
            v-for="source in ['1', '2', '3']"
            :key="source"
            @click="selectSource(zone.id, source)"
            :class="{
              greenSource: zone.activeSource === source,
              redSource: zone.activeSource !== source,
            }"
          >
            {{ source }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { debounce } from "lodash";
import { useAudioStore } from "../store/modules/audio";
import { zoneDefinitions } from "../store/plugins/zoneSettings";

const store = useAudioStore();

const zones = computed(() => {
  return Object.keys(store.zones).map((key) => {
    const zone = store.zones[key];
    // Extract the numeric part from the zone ID (e.g., "zone1" -> 1)
    const zoneNumber = parseInt(zone.id.replace(/[^0-9]/g, ""), 10);
    return {
      ...zone,
      // Use custom name if defined, otherwise default to 'Zone X'.
      name: zoneDefinitions[zoneNumber]?.commonName || `Zone ${zoneNumber}`,
    };
  });
});

// Debounced slider update function to prevent excessive calls.
const updateSlider = debounce((id, value) => {
  const numericValue = Number(value);
  store.setSliderValue(id, numericValue);
}, 300); // Debounce time in milliseconds

const selectSource = (id, source) => {
  store.selectSource(id, source);
};

const toggleZone = (zoneId) => {
  const zone = store.zones[zoneId];
  if (!zone) {
    console.error(`Zone with id ${zoneId} not found.`);
    return;
  }
  zone.isOn = !zone.isOn;

  console.log(`Zone ${zoneId} is now ${zone.isOn ? "ON" : "OFF"}`);
};
</script>

<style scss scoped>
.zones-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: auto;
}

.zone {
  border: 1px solid #000; /* For visibility */
  padding: 10px;
  width: 100%;
  margin: auto;
  margin-bottom: 20px; /* Space between zones */
}

.zone-name {
  flex-grow: 1;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
}

.toggle-button {
  margin-right: 10px; /* Space between button and slider */
  height: 38px;
  width: 79px;
}

.horizontal-slider {
  -webkit-appearance: none; /* Removes default webkit styles */
  appearance: none;
  flex-grow: 1; /* Slider takes up remaining space */
  height: 8px; /* Specified height of the slider */
  background: #ddd; /* Background of the track */
  outline: none; /* Removes the outline */
  opacity: 0.7; /* Makes the slider slightly transparent */
  transition: opacity 0.2s; /* Smooth transition for the slider */
}

/* Style for the thumb (the draggable button) */
.horizontal-slider::-webkit-slider-thumb {
  -webkit-appearance: none; /* Removes default webkit styles */
  appearance: none;
  width: 25px; /* Width of the thumb */
  height: 25px; /* Height of the thumb */
  background: #2163b9; /* Thumb background */
  cursor: pointer; /* Cursor changes when hovering the thumb */
  border-radius: 50%; /* Makes the thumb circular */
}

/* Style for the track (the line the thumb slides on) */
.horizontal-slider::-webkit-slider-runnable-track {
  width: 100%; /* Width of the track */
  height: 8px; /* Height of the track */
  background: #ddd; /* Background of the track */
  border-radius: 25px; /* Rounds the corners of the track */
}

/* Style for the filled part of the track to the left of the thumb */
.horizontal-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  margin-top: -9px; /* Centers the thumb over the track */
}

/* Focus styles */
.horizontal-slider:focus {
  opacity: 1; /* Slider is fully opaque when focused */
}

.zone-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0.5rem; /* Adjust as needed */
}

.select-source {
  position: center; /* Position the select source text absolutely */
  right: 0; /* Align to the right side */
  transform: translateX(-30%); /* Center the text above the buttons */
  font-weight: bold;
}

.zone-controls {
  display: flex;
  align-items: center;
}

.action-buttons {
  display: flex;
  justify-content: center; /* Center the buttons */
  gap: 10px; /* Space between buttons */
  margin-left: auto; /* Push the buttons to the right */
  margin-right: auto; /* Aligns buttons to the left */
  position: relative; /* If you need to position children absolutely */
  text-align: center; /* Center-align children text */
}

.greenSource {
  background-color: green;
  border-color: green;
  color: white;
}

.redSource {
  background-color: red;
  border-color: red;
  color: white;
}
</style>
