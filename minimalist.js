$(document).ready(function() {
    $( ".inputweight" ).change(function() {
        var weight = $(".inputweight").val();
        console.log( weight );
    });
    $( ".inputUnit" ).change(function() {
        var unit = $(".inputUnit").val();
        console.log(unit);
    });
    $( ".inputMedication" ).change(function() {
        var medication = $(".inputMedication").val();
        console.log(medication);
    });
});