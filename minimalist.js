$(document).ready(function() {
    var unit = $(".inputUnit").val();
    console.log(unit);
    var weight = $(".inputweight").val();
    console.log(weight);
    var medication = $(".inputMedication").val();
    console.log(medication);

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
    var result = weight * unit * medication;
    ${".bg-success"}.text(result);
});