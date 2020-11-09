// Get the modal
let modal = document.getElementById("myOnboarding");

// Get overlay 
let overlay = document.getElementById("overlay");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  overlay.style.display = "none";
}

// When the user clicks the button the current layer will be removed //
function onBoardingBtn1() {
  document.getElementById("myOnboarding").style.display = "none";
   document.getElementById("overlay").style.display = "none";
}

function onBoardingBtn2() {
  document.getElementById("myModal2").style.display = "none";
}

function onBoardingBtn3() {
  document.getElementById("myModal3").style.display = "none";
}

