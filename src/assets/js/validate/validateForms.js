
$("#statement").keyup(function (event) {
    validateInputs2();
});

$("#evidence").keyup(function (event) {
    validateInputs3();
});

$("#title").keyup(function (event) {
    validateInputs();
});

$("#institution").keyup(function (event) {
    validateInputs();
});

$("#department").keyup(function (event) {
    validateInputs();
});

$("#implicated").keyup(function (event) {
    validateInputs();
});

function validateInputs() {
    var disableButton = false;

    var val1 = $("#title").val();
    var val2 = $("#institution").val();
    var val3 = $("#department").val();
    var val4 = $("#implicated").val();

    if (val1.length == 0 || val2.length == 0 || val3.length == 0 || val4.length == 0)
        disableButton = true;

    $('#next1').attr('disabled', disableButton);
}

function validateInputs2() {
    var disableButton = false;

    var val1 = $("#statement").val();

    if (val1.length == 0)
        disableButton = true;

    $('#next2').attr('disabled', disableButton);
}

function validateInputs3() {
    var disableButton = false;

    var val1 = $("#evidence").val();

    if (val1.length == 0)
        disableButton = true;

    $('#next3').attr('disabled', disableButton);
}