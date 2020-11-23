var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 10000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  console.log(document.getElementById("contents"))
  document.getElementById("contents").style.display = "block";
}

// function myFunction() {
//   if (App.createTask()) {
//     document.getElementById("loader").style.display = "none";
//     document.getElementById("contents").style.display = "block";
//   }
// }

// else {
//   document.getElementById("loader").style.display = "none";
// }