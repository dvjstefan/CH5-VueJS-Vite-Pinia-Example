// processFeedback.js
import * as CrComLib from '@crestron/ch5-crcomlib/build_bundles/cjs/cr-com-lib';
import { useDisplaysStore } from '../../modules/displays';
import { useCounterStore } from '../../modules/counter';
import { useAudioStore } from '../../modules/audio';
import { useGlobalSettingStore } from '../../modules/globalSetting';

export default function processFeedback() {
    // Initialize Pinia stores to manage different parts of the application state.
    const displaysStore = useDisplaysStore();
    const counterStore = useCounterStore();
    const audioStore = useAudioStore();
    const globalSettingStore = useGlobalSettingStore();

    // Define feedback configuration for handling Crestron control system feedback.
    // This includes digital, analog, and serial join configurations.
    let feedbackJoins = {
        digital: [
            // Digital join callbacks handle boolean (on/off) state changes.
            // Each join has a unique ID and a callback function that updates
            // the state in the corresponding store based on the received boolean value.
            // Example: join 11 sets the power feedback for 'display_1' in displaysStore.
            // The pattern is similar for other digital joins.
            {
                join: 11,
                callback: (boolValue) => {
                    displaysStore.setPowerFeedback({
                        id: 'display_1',
                        power: boolValue,
                    });
                },
            },
            {
                join: 12,
                callback: (boolValue) => {
                    displaysStore.setPowerFeedback({
                        id: 'display_1',
                        power: !boolValue,
                    });
                },
            },
            {
                join: 13,
                callback: (boolValue) => {
                    displaysStore.setPowerFeedback({
                        id: 'display_2',
                        power: boolValue,
                    });
                },
            },
            {
                join: 14,
                callback: (boolValue) => {
                    displaysStore.setPowerFeedback({
                        id: 'display_2',
                        power: !boolValue,
                    });
                },
            },
            // Join 20: Sets the power state of 'zone1' in audioStore.
            // This join directly maps the boolean value received to the power state of the zone.
            // If the boolean value is true, the zone is powered on; if false, it's powered off.
            {
                join: 20,
                callback: (boolValue) => {
                    audioStore.setPowerFeedback({
                        id: 'zone1',
                        power: boolValue,
                    });
                },
            },
            // Join 21: Selects source '1' for 'zone1' in audioStore, but only when the boolean value is true.
            // This join performs a conditional action. Unlike join 20, it doesn't directly map the boolean value;
            // instead, it changes the audio source only if the value is true, and does nothing if false.
            {
                join: 21,
                callback: (boolValue) => {
                    if (boolValue) {
                        audioStore.selectSource('zone1', '1');
                    }
                }
            },
            {
                join: 22,
                callback: (boolValue) => {
                    if (boolValue) {
                        audioStore.selectSource('zone1', '2');
                    }
                }
            },
            {
                join: 23,
                callback: (boolValue) => {
                    if (boolValue) {
                        audioStore.selectSource('zone1', '3');
                    }
                }
            },
            {
                join: 25,
                callback: (boolValue) => {
                    audioStore.setPowerFeedback({
                        id: 'zone2',
                        power: boolValue,
                    });
                },
            },
            {
                join: 26,
                callback: (boolValue) => {
                    if (boolValue) {
                        audioStore.selectSource('zone2', '1');
                    }
                }
            },
            {
                join: 27,
                callback: (boolValue) => {
                    if (boolValue) {
                        audioStore.selectSource('zone2', '2');
                    }
                }
            },
            {
                join: 28,
                callback: (boolValue) => {
                    if (boolValue) {
                        audioStore.selectSource('zone2', '3');
                    }
                }
            },
            {
                join: 30,
                callback: (boolValue) => {
                    audioStore.setPowerFeedback({
                        id: 'zone3',
                        power: boolValue,
                    });
                },
            },
            {
                join: 31,
                callback: (boolValue) => {
                    if (boolValue) {
                        audioStore.selectSource('zone3', '1');
                    }
                }
            },
            {
                join: 32,
                callback: (boolValue) => {
                    if (boolValue) {
                        audioStore.selectSource('zone3', '2');
                    }
                }
            },
            {
                join: 33,
                callback: (boolValue) => {
                    if (boolValue) {
                        audioStore.selectSource('zone3', '3');
                    }
                }
            },
            {
                join: 35,
                callback: (boolValue) => {
                    audioStore.setPowerFeedback({
                        id: 'zone4',
                        power: boolValue,
                    });
                },
            },
            {
                join: 36,
                callback: (boolValue) => {
                    if (boolValue) {
                        audioStore.selectSource('zone4', '1');
                    }
                }
            },
            {
                join: 37,
                callback: (boolValue) => {
                    if (boolValue) {
                        audioStore.selectSource('zone4', '2');
                    }
                }
            },
            {
                join: 38,
                callback: (boolValue) => {
                    if (boolValue) {
                        audioStore.selectSource('zone4', '3');
                    }
                }
            },
            {
                join: 40,
                callback: (boolValue) => {
                    audioStore.setPowerFeedback({
                        id: 'zone5',
                        power: boolValue,
                    });
                },
            },
            {
                join: 41,
                callback: (boolValue) => {
                    if (boolValue) {
                        audioStore.selectSource('zone5', '1');
                    }
                }
            },
            {
                join: 42,
                callback: (boolValue) => {
                    if (boolValue) {
                        audioStore.selectSource('zone5', '2');
                    }
                }
            },
            {
                join: 43,
                callback: (boolValue) => {
                    if (boolValue) {
                        audioStore.selectSource('zone5', '3');
                    }
                }
            }
            // ... other digital joins
        ],
        analog: [
            // Analog join callbacks handle numeric value changes.
            // These are used for features like setting counter values or slider positions.
            // Example: join 1 updates the counter value in counterStore.
            // The pattern is similar for other analog joins.
            {
                join: 1,
                callback: (analogValue) => {
                    counterStore.setCounter(analogValue);
                }
            },
            {
                join: 10,
                callback: (analogValue) => {
                    audioStore.setSliderValue('zone1', analogValue);
                }
            },
            {
                join: 11,
                callback: (analogValue) => {
                    audioStore.setSliderValue('zone2', analogValue);
                }
            },
            {
                join: 12,
                callback: (analogValue) => {
                    audioStore.setSliderValue('zone3', analogValue);
                }
            },
            {
                join: 13,
                callback: (analogValue) => {
                    audioStore.setSliderValue('zone4', analogValue);
                }
            },
            {
                join: 14,
                callback: (analogValue) => {
                    audioStore.setSliderValue('zone5', analogValue);
                }
            },
            
            // ... additional analog joins
        ],
        serial: [
            // Serial join callbacks handle string value changes.
            // These are used for features like setting textual information.
            // Example: join 1 sets the system name in globalSettingStore.
            {
                join: 1,
                callback: (serialValue) => {
                    globalSettingStore.setSystemName(serialValue);
                },
            },
            // ... additional serial joins
        ],
    };

    // Subscribing to digital join feedback
    feedbackJoins.digital.forEach((digital) => {
        CrComLib.subscribeState('b', digital.join.toString(), (boolValue) => {
            if (import.meta.env.MODE === 'development') {
                console.log(`Digital join ${digital.join} value: ${boolValue}`);
            }
            digital.callback(boolValue);
        });
    });

    // Subscribing to analog join feedback
    feedbackJoins.analog.forEach((analog) => {
        CrComLib.subscribeState('n', analog.join.toString(), (analogValue) => {
            if (import.meta.env.MODE === 'development') {
                console.log(`Analog join ${analog.join} value: ${analogValue}`);
            }
            analog.callback(analogValue);
        });
    });

    // Subscribing to serial join feedback
    feedbackJoins.serial.forEach((serial) => {
        CrComLib.subscribeState('s', serial.join.toString(), (serialValue) => {
            if (import.meta.env.MODE === 'development') {
                console.log(`Serial join ${serial.join} value: ${serialValue}`);
            }
            serial.callback(serialValue);
        });
    });
}
