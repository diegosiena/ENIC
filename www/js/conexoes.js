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

function carregaConexoes() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN] = 'span-desconhecida';
    states[Connection.ETHERNET] = 'span-ethernet';
    states[Connection.WIFI] = 'span-wifi';
    states[Connection.CELL_2G] = 'span-2G';
    states[Connection.CELL_3G] = 'span-3G';
    states[Connection.CELL_4G] = 'span-4G';
    states[Connection.NONE] = 'span-sem-conexao';

    $("#" + states[networkState]).removeClass('glyphicon-minus');
    $("#" + states[networkState]).addClass('glyphicon-ok');
    $("#" + states[networkState]).addClass('conexaoAtiva');
}