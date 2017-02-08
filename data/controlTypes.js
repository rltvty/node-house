module.exports = {
    0: {
        type: "Plum Light Switch",
        properties: {
            isDimmer: {
                type: "boolean",
                readOnly: true
            },
            switchLevel: {
                type: "uint8",
                readOnly: false
            },
            wattage: {
                type: "uint",
                readOnly: true
            }
        }
    },
    1: {
        type: "Marantz Receiver Zone 1",
        properties: {
            isPowered: {
                type: "boolean",
                readOnly: false
            },
            volume : {
                type: "uint8",
                readOnly: false
            },
            source : {
                type: "selection",
                readOnly: false,
                choices: [
                    "Apple TV",
                    "Chromecast",
                    "Airplay",
                    "Tuner",
                    "Roku",
                    "Security",
                    "Motu",
                    "Bluetooth"
                ]
            }
        }
    },
    2: {
        type: "Marantz Receiver Zone 2",
        properties: {
            isPowered: {
                type: "boolean",
                readOnly: false
            },
            volume : {
                type: "uint8",
                readOnly: false
            },
            source : {
                type: "selection",
                readOnly: false,
                choices: [
                    "Apple TV",
                    "Chromecast",
                    "Airplay",
                    "Tuner",
                    "Roku",
                    "Motu",
                    "Bluetooth"
                ]
            }
        }
    },
    3: {
        type: "ZigBee Outlet Switch",
        properties: {
            isPowered: {
                type: "boolean",
                readOnly: false
            },
            wattage: {
                type: "uint",
                readOnly: true
            }
        }
    }
};
