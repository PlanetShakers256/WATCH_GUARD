// ENABLE BUTTONS WHEN CHECKBOXES ARE CHECKED


function enableSubmit(val) {
    var sbmt = document.getElementById("proceed");

    if (val.checked == true) {
        sbmt.disabled = false;
    }
    else {
        sbmt.disabled = true;
    }
}

function enableSubmit2(val) {
    var sbmt = document.getElementById("agree");

    if (val.checked == true) {
        sbmt.disabled = false;
    }
    else {
        sbmt.disabled = true;
    }
}
