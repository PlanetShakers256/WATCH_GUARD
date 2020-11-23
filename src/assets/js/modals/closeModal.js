// OPEN PREVIOUS MODAL WHEN EDIT BUTTON IS CLICKED

function closeModal4(){
    var modal = document.getElementById("myModal4");
    modal.style.display = "none";

    var modal1 = document.getElementById("myModal3");
    modal1.style.display = "block";
}

function closeModal3(){
    var modal = document.getElementById("myModal3");
    modal.style.display = "none";

    var modal1 = document.getElementById("myModal2");
    modal1.style.display = "block";
}

function closeModal2(){
    var modal = document.getElementById("myModal2");
    modal.style.display = "none";

    var modal1 = document.getElementById("myModal1");
    modal1.style.display = "block";
}

function closeModal1(){
    var modal = document.getElementById("myModal1");
    modal.style.display = "none";
    document.querySelector("body").style.overflowY = 'scroll';
}

function closeModal6(){
    var modal = document.getElementById("myModal6");
    modal.style.display = "none";
    // document.querySelector("body").style.overflowY = 'scroll';
    window.location.reload()
}

function closeModal7(){
    var modal = document.getElementById("myModal7");
    modal.style.display = "none";
    document.querySelector("body").style.overflowY = 'scroll';
}

function closeModal8(){
    var modal = document.getElementById("myModal8");
    modal.style.display = "none";
    document.querySelector("body").style.overflowY = 'scroll';
}