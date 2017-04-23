$(document).ready(function() {
    var weight = $(".inputweight").val();
    $( ".inputweight" ).change(function() {
        alert( weight );
    });
});