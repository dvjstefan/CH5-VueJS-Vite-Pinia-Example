// crestron.js is intended to integrate Crestron system functionality with a Vue.js application.

// Importing Crestron Communication Library for JavaScript to interact with Crestron hardware
import * as CrComLib from '@crestron/ch5-crcomlib/build_bundles/cjs/cr-com-lib';
import debounce from 'lodash/debounce'; // Importing debounce function from lodash to prevent over-calling of functions
import eruda from 'eruda'; // Importing eruda for an on-screen console used for debugging in development environments
import processFeedback from './crestron/processFeedback'; // Importing a custom function to process feedback from the Crestron system

// Default export of a function to create the Crestron plugin
export default function createCrestronPlugin() {
  // Initialize eruda in development mode for on-screen console debugging
  if (import.meta.env.MODE == "development") {
    
    eruda.init();
    eruda.scale(1.5);

    // Position eruda at top right corner.
    // Entry button is 60px wide when scaled to 1.5.  With 20px padding,
    // entry button should be placed at window width - 80
    let x = window.innerWidth - 80;
    eruda.position({ x: x, y: 20 });
}

  // Make CrComLib functions accessible in the global window object if needed
  if (CrComLib.isCrestronTouchscreen()) {
    window.CrComLib = CrComLib;
    // These functions handle native bridge communication between the touchscreen and the control system
    window.bridgeReceiveIntegerFromNative = CrComLib.bridgeReceiveIntegerFromNative;
    window.bridgeReceiveBooleanFromNative = CrComLib.bridgeReceiveBooleanFromNative;
    window.bridgeReceiveStringFromNative = CrComLib.bridgeReceiveStringFromNative;
    window.bridgeReceiveObjectFromNative = CrComLib.bridgeReceiveObjectFromNative;
        
    // Debounce function for handling flickering state changes
    const changeOnlineState = debounce((state) => {
      console.log(`Debounced CrestronPanel ${state ? 'Online' : 'Offline'}`);
    }, 500);

    // Subscribe to the Control system online state feedback
    CrComLib.subscribeState('b', 'Csig.All_Control_Systems_Online_fb', (state) => {
      console.log(`Raw CrestronPanel ${state ? 'Online' : 'Offline'}`);
      changeOnlineState(state);
    });

    // Initialize feedback processing for Pinia
    processFeedback();
  }
}