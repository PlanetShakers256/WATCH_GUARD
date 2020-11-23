function fetch(){
    console.log("ok")
    console.log(App.renderCase())
    App.renderCase()

    document.querySelector("body").style.overflowY = 'hidden';

    var modal1 = document.getElementById("myModal7");
    modal1.style.display = "none";

    var modal = document.getElementById("myModal8");
    modal.style.display = "block";

    // Get the <span> element that closes the modal
    var span = document.getElementById("closeModal8");

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