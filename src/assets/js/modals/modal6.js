function modal6() {   // Get the modal
    document.querySelector("body").style.overflowY = 'hidden';

    document.getElementById("myModal5").style.display = "none";
    var modal = document.getElementById("myModal6");
    modal.style.display = "block";
    console.log("check1")
    console.log(document.getElementById("loader"))
    document.getElementById("loader").style.display = "block";
    console.log("check2")
    App.createTask();
    myFunction()

    // Get the <span> element that closes the modal
    var span = document.getElementById("closeModal6");

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