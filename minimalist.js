$(document).ready(function() {
    $(".inputweight, .inputUnit, .inputMedication").change(function() {
        
        var weight = $(".inputweight").val().replace(",", ".");
        var unit = $(".inputUnit").val();
        var medication = $(".inputMedication").val();
        console.log(weight);
        console.log(unit);
        console.log(medication);
        var result = (Math.floor(parseFloat(weight) * parseFloat(unit) * parseFloat(medication)*100)/100).toFixed(1);
        console.log(result);
        $(".bg-success").text("Dose à donner : " + result + " ml");
    });
});