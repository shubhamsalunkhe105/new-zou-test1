function myFunction2() {
  document.getElementById("demo").innerHTML = "Step 2 Lorem ipsum dolor sit amet, consectetur aincididunt utlit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua tempor magna. magna aliqua tempor magna.";
}

function myFunction3() {
  document.getElementById("demo").innerHTML = "Step 3 ut labore et sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua tempo rdolore magna aliqua ut labore et.";
}

function myFunction4() {
  document.getElementById("demo").innerHTML = "Step 4 tempor magna dolor sit amet, consectetur adipiscing elit, sed do tempor magna incididunt ut labore et dolore magna aliqua tempo rdolore magna aliqua tempor magna.";
}

function myFunction() {
  document.getElementById("demo").innerHTML = "Step 1 dolore magna dolor sit amet, consectetur adipiscing elit, sed do dolore magna incididunt ut labore et dolore magna aliqua tempo rdolore magna aliqua tempor magna.";
}

// signup popup//

var modal = document.getElementById("signupmodal");
var btn = document.getElementById("signupbtn");
var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var btns = document.getElementsByClassName("myBtn");

for (var i = 0; i < btns.length; i++) {
  btns[i].onclick = function() {
    modal.style.display = "block";
  }
}