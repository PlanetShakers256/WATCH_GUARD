function modal4() {   // Get the modal
    document.querySelector("body").style.overflowY = 'hidden';
    let title = document.getElementById("title").value;
    let tt = document.getElementById("tt");
    tt.innerHTML = title;
    document.getElementById("inst").innerHTML = document.getElementById("institution").value
    document.getElementById("dpt").innerHTML = document.getElementById("department").value
    // document.getElementById("impl").innerHTML = document.getElementById("implicated").value
    document.getElementById("sttt").innerHTML = document.getElementById("statement").value
    document.getElementById("ev").innerHTML = document.getElementById("evidence").value

    document.getElementById("myModal3").style.display = "none";
    var modal = document.getElementById("myModal4");
    modal.style.display = "block";

    // Get the <span> element that closes the modal
    var span = document.getElementById("closeModal4");

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
        document.querySelector("body").style.overflowY = 'scroll';
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
            document.querySelector("body").style.overflowY = 'scroll';
        }
    }
}