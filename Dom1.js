document.title = "Dom in JavaScript";
// Style an element using querySelector
document.querySelector(".dsa").style.color = "red";

// Style elements using querySelectorAll
let depts = document.querySelectorAll(".data");
depts[0].style.color = "red";
depts[1].style.color = "blue";
depts[2].style.color = "green";

// Function to toggle background color
function changeBackground() {
  if (document.body.style.backgroundColor === "pink") {
    document.body.style.backgroundColor = "blue";
  } else {
    document.body.style.backgroundColor = "pink";
  }
}

// Function to change text
function changetext() {
  document.getElementById("clg").innerHTML = "KMIT, ALU";
}