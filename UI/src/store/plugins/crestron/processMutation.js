// processMutation.js is a utility script to handle various actions (mutations)

// Importing the Crestron Communication Library to interact with Crestron hardware
import * as CrComLib from "@crestron/ch5-crcomlib/build_bundles/cjs/cr-com-lib";

// Sets an analog value for a specified join.
export function setAnalog(join, value) {
  CrComLib.publishEvent("n", join, value);
}

// Simulates a button press and release on a digital join.
export function pulse(join) {
  CrComLib.publishEvent("b", join, true); // Press
  setTimeout(() => CrComLib.publishEvent("b", join, false), 10); // Release
}

// Emulates an increment button press on join 1.
export function processIncrement() {
  pulse(1);
}

// Emulates a decrement button press on join 2.
export function processDecrement() {
  pulse(2);
}

// Processes power feedback for a display based on its ID and power state.
export function processSetPowerFeedback(id, power) {
  let join;
  // Determine the join number based on the display ID and power state.
  switch (id) {  // Determine the join number based on the display id and power state
    case "display_1":
      join = power ? 11 : 12; // Join numbers for display 1's power state
      break;
    case "display_2":
      join = power ? 13 : 14; // Join numbers for display 2's power state
      break;
    // Add additional cases for more displays if necessary
  }
  pulse(join); // Toggle the power state of the display.
}
// Toggles a zone's state based on its ID.
export function processToggleZone(id) {
  let join;
    // Map zone IDs to their respective join numbers.
  switch (id) {
    // Add more cases as needed for additional zones.
    // Each case associates a zone ID with a specific join number.
    // Example: join 20 corresponds to zone1.
    case "zone1":
      join = 20;
      break;
    case "zone2":
      join = 25;
      break;
    case "zone3":
      join = 30;
      break;
    case "zone4":
      join = 35;
      break;
    case "zone5":
      join = 40;
      break;
    // Add more cases as needed
  }
  pulse(join);  // Simulate a button press for the zone.
}
// Selects a source for a zone based on its ID and the source number.
export function processSelectSource(id, source) {
  let join;
    // Determine the join number based on the zone ID and source number.
  switch (id) {
    // Cases for each zone, mapping the source number to the appropriate join.
    case "zone1":
      join = source === "1" ? 21 : source === "2" ? 22 : 23;
      break;
    case "zone2":
      join = source === "1" ? 26 : source === "2" ? 27 : 28;
      break;
    case "zone3":
      join = source === "1" ? 31 : source === "2" ? 32 : 33;
      break;
    case "zone4":
      join = source === "1" ? 36 : source === "2" ? 37 : 38;
      break;
    case "zone5":
      join = source === "1" ? 41 : source === "2" ? 42 : 43;
      break;
  }
  pulse(join); // Simulate a button press for selecting the source.
}

// Processes an analog value for a zone based on its ID.
export function processAnalogValue(id, value) {
  let join;
    // Map zone IDs to their respective analog join numbers.
  switch (id) {
    // Each case associates a zone ID with a specific analog join number.
    case "zone1":
      join = 10;
      break;
    case "zone2":
      join = 11;
      break;
    case "zone3":
      join = 12;
      break;
    case "zone4":
      join = 13;
      break;
    case "zone5":
      join = 14;
      break;
  }
  setAnalog(join, value); // Set the analog value for the zone.
}

// Add more exported functions for other mutations as needed
