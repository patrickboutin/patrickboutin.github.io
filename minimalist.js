$(document).ready(function() {
    var weight = $('input[id=inputweight]').val();
    $( ".inputweight" ).change(function() {
        alert( weight );
    });
});