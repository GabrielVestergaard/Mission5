$(document).ready(function () {
    var hourlyRate = 50;

    // Prevent e, E, +, - in the hours field (number inputs allow "e" for scientific notation)
    $("#hours").on("keydown", function (e) {
        if (e.key === "e" || e.key === "E" || e.key === "+" || e.key === "-") {
            e.preventDefault();
        }
    });

    $("#calculateBtn").on("click", function () {
        var hoursInput = $("#hours").val().trim();
        var hoursError = $("#hoursError");

        hoursError.text("");

        if (hoursInput === "" || hoursInput === null) {
            hoursError.text("Please enter the number of hours.");
            $("#total").val("");
            return;
        }

        var hours = parseFloat(hoursInput);

        if (isNaN(hours)) {
            hoursError.text("Please enter a valid number.");
            $("#total").val("");
            return;
        }

        if (hours <= 0) {
            hoursError.text("Please enter a positive number.");
            $("#total").val("");
            return;
        }

        var total = hours * hourlyRate;
        $("#total").val("$" + total.toFixed(2));
    });
});
