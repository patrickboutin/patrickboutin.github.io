$(document).ready(function() {
    $(".inputweight, .inputUnit, .inputMedication").change(function() {
        
        var weight = $(".inputweight").val().replace(",", ".");
        var unit = $(".inputUnit").val();
        var medication = $(".inputMedication").val();
        console.log(weight);
        console.log(unit);
        console.log(medication);
        var result = parseFloat(weight) * parseFloat(unit) * parseFloat(medication);
        var result = result.toString().match(/^-?\d+(?:\.d{0,2})?/)[0];
        console.log(result);
        $(".bg-success").text("Dose à donner : " + result + " ml");
    });
});