$(document).ready(function() {
    var unit: number = $(".inputUnit").val();
    var weight: number = $(".inputweight").val();
    var medication: number = $(".inputMedication").val();

    $( ".inputweight" ).change(function() {
        var weight: number = $(".inputweight").val();
    });
    $( ".inputUnit" ).change(function() {
        var unit: number = $(".inputUnit").val();
    });
    $( ".inputMedication" ).change(function() {
        var medication: number = $(".inputMedication").val();
    });
    var result: number = weight * unit * medication;
    console.log(result);
    $(".bg-success").text("Dose à donner: " + result + " ml");
});