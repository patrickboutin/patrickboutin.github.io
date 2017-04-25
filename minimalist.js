$(document).ready(function() {
    var weight = $(".inputweight").change(function() {
        $(".inputweight").val();
    });
    console.log(weight);
    var unit = $(".inputUnit").change(function() {
    	$(".inputUnit").val();
      });
    console.log(unit);
    var medication = $(".inputMedication").change(function() {
        $(".inputMedication").val();
    });
    console.log(medication);
    var result = parseFloat(weight) * parseFloat(unit) * parseFloat(medication);
    console.log(result);
    $(".bg-success").text("Dose à donner: " + result + " ml");
});