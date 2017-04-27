$(document).ready(function() {
    $(".inputweight, .inputUnit, .inputMedication").change(function() {
        
        var weight = $(".inputweight").val().replace(",", ".");
        var unit = $(".inputUnit").val();
        var medication = $(".inputMedication").val();
        console.log(weight);
        console.log(unit);
        console.log(medication);
        var result = parseFloat(weight) * parseFloat(unit) * parseFloat(medication);
        var result = num.toString(result).match(/^-?\d+(?:\.d{0,1})?/)[0];
        console.log(result);
        $(".bg-success").text("Dose à donner : " + result + " ml");
    });
});