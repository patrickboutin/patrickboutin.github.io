$(document).ready(function() {
    var unit = $(".inputUnit").val();
    var weight = $(".inputweight").val();
    var medication = $(".inputMedication").val();

    $( ".inputweight" ).change(function() {
        var weight = $(".inputweight").val();
        var result = parseFloat(weight) * parseFloat(unit) * parseFloat(medication);
        $(".bg-success").text("Dose à donner: " + result + " ml");

    });
    $( ".inputUnit" ).change(function() {
        var unit = $(".inputUnit").val();
        var result = parseFloat(weight) * parseFloat(unit) * parseFloat(medication);
        $(".bg-success").text("Dose à donner: " + result + " ml");
    });
    $( ".inputMedication" ).change(function() {
        var medication = $(".inputMedication").val();
        var result = parseFloat(weight) * parseFloat(unit) * parseFloat(medication);
        $(".bg-success").text("Dose à donner: " + result + " ml");
    });
    var result = parseFloat(weight) * parseFloat(unit) * parseFloat(medication);
    console.log(result);
    $(".bg-success").text("Dose à donner: " + result + " ml");
});