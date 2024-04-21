var host = "test.mosquitto.org"; 
var port = 1883;   

var clientID = "clientID - " + parseInt(Math.random() * 100);
var client = new Paho.MQTT.Client(host, Number(port), clientID);

client.onConnectionLost = onConnectionLost;

function startConnect() {
    client.connect({
        onSuccess: onConnect
    });
}

function publishMessage() {
    var msg = 'start';
    var topic = 'pompe';

    var message = new Paho.MQTT.Message(msg);
    message.destinationName = topic;

    client.send(message);
}

var button = document.querySelector('.demarrage-button');
button.addEventListener('click', function() {
    publishMessage();
});

function onConnectionLost(response) {
    console.log("Connection lost:", response.errorMessage);
}

function onConnect() {
    console.log("Connected to MQTT broker");
}