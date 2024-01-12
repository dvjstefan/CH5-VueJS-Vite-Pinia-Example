import * as WebXPanel from "@crestron/ch5-webxpanel/dist/cjs/index"

console.log(`WebXPanel version: ${WebXPanel.getVersion()}`);
console.log(`WebXPanel build date: ${WebXPanel.getBuildDate()}`);

const configuration = { 
    host: '192.168.0.59', // crestron processor ip/hostname
    ipId: '0x04', // string representing a hex value. Might contain "0x" or not. Defaults to "0x03" 
    roomId: '', // defaults to empty string 
}; 

if (WebXPanel.isActive) {
    console.log('initializing webxpanel');
    WebXPanel.default.initialize(configuration); 
}
