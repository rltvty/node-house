var WebSocketClient = require('websocket').client;

module.exports = function (socket_name, socket_url, stream_name, data_callback) {

    var client = new WebSocketClient();
    client.on('connectFailed', function(error) {
        console.log(socket_name + ' Connect Error: ' + error.toString());
    });

    client.on('connect', function(connection) {
        clearInterval(reconnectInterval);
        console.log(socket_name + ' Client Connected');
        connection.on('error', function(error) {
            console.log(socket_name + ' Connection Error: ' + error.toString());
        });
        connection.on('close', function() {
            console.log(socket_name + ' Connection Closed');
            startReconnect();
        });
        connection.on('message', function(message) {
            if (message.type === 'utf8') {
                data_callback(JSON.parse(message.utf8Data));
            }
        });
    });

    var reconnectInterval = null;

    function startReconnect() {
        reconnectInterval = setInterval(function() {
            console.log('Attempting reconnect on ' + socket_name);
            client.connect(socket_url, stream_name);
        },
        10000 //attempt re-connect every 10 seconds?
        )
    }

    startReconnect();

};

