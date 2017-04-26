$(document).ready(function() {
    $(".inputweight, .inputUnit, .inputMedication").change(function() {
        var weight = $(".inputweight").val();
        var unit = $(".inputUnit").val();
        var medication = $(".inputMedication").val();
        console.log(weight);
        console.log(unit);
        console.log(medication);
        var result = Math.round(parseFloat(weight) * parseFloat(unit) * parseFloat(medication)*10)/10;
        console.log(result);
        $(".bg-success").text("Dose à donner: " + result + " ml");
    });

});