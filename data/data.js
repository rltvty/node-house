var controls = require('./controls.js');
var controlTypes = require('./controlTypes.js');
var rooms = require('./rooms.js');


var data = [];

for (var roomId in rooms) {
    var room = rooms[roomId];

    room.id = roomId;
    room.controls = [];

    for(var controlId in controls) {
        var control = controls[controlId];
        if (control.roomId == roomId) {
            control.controlId = controlId;
            control.controlType = controlTypes[control.controlTypeId];
            for(var controlProperty in control.controlType['properties']) {
                var controlPropertyType = control.controlType['properties'][controlProperty]['type'];
                switch (controlPropertyType) {
                    case 'uint8':
                    case 'uint':
                        control.controlType['properties'][controlProperty]['value'] = 0;
                        break;
                    case 'boolean':
                        control.controlType['properties'][controlProperty]['value'] = false;
                        break;
                    case 'selection':
                        var choices = control.controlType['properties'][controlProperty]['choices'];
                        control.controlType['properties'][controlProperty]['value'] = choices[0];
                        break;
                }
            }
            delete control.roomId;
            room.controls.push(control);
        }
    }
    data.push(room);
}

module.exports = data;