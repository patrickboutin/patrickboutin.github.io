$(document).ready(function() {
    var weight = $(".inputweight").change(function() {
        $(".inputweight").val();
    });
    var unit = $(".inputUnit").change(function() {
    	$(".inputUnit").val();
      });
    var medication = $(".inputMedication").change(function() {
        $(".inputMedication").val();
    });
    var result = parseFloat(weight) * parseFloat(unit) * parseFloat(medication);
    console.log(result);
    $(".bg-success").text("Dose à donner: " + result + " ml");
});