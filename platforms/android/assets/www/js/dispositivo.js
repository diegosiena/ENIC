var app = {
// Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.addEventListener('backbutton', voltar, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        console.log('Received Event: ' + id);
    }
};

function voltar() {
    navigator.app.backHistory();
}

function carregaDispositivo() {
    var element = document.getElementById('deviceProperties');

    element.innerHTML = "Ola";

    try {
        element.innerHTML = 'Device Name:  ' + device.name + '<br /><br />' +
                'Device Cordova:  ' + device.cordova + '<br /><br />' +
                'Device Platform:  ' + device.platform + '<br /><br />' +
                'Device UUID:  ' + device.uuid + '<br /><br />' +
                'Device Model:  ' + device.model + '<br /><br />' +
                'Device Version:  ' + device.version + '<br />';
    }
    catch (err) {
        element.innerHTML = err.message;
    }
}