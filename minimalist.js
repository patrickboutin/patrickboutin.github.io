$(document).ready(function() {
    var unit = $(".inputUnit").val();
    var weight = $(".inputweight").val();
    var medication = $(".inputMedication").val();

    $( ".inputweight" ).change(function() {
        var weight = $(".inputweight").val();
    });
    $( ".inputUnit" ).change(function() {
        var unit = $(".inputUnit").val();
    });
    $( ".inputMedication" ).change(function() {
        var medication = $(".inputMedication").val();
    });
    var result = parseFloat(weight) * parseFloat(unit) * parseFloat(medication);
    console.log(result);
    $(".bg-success").text("Dose à donner: " + result + " ml");
});