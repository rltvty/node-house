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
            delete control.roomId;
            room.controls.push(control);
        }
    }
    data.push(room);
}

module.exports = data;