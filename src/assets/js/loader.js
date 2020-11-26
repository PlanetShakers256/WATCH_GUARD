let timer;

function myFunction() {
  timer = setTimeout(showPage, 10000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  console.log(document.getElementById("contents"))
  document.getElementById("contents").style.display = "block";
}