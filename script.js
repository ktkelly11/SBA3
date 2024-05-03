// Examining the document
// console.dir(document);

// creating variables
const header = document.getElementsByClassName("header");
const intro = document.getElementsByTagName("p");
const donations = document.getElementById("donation-forms");
const checkboxes = document.querySelector(".checkboxes");
const contact = document.getElementsByClassName("contact-info");
const name = document.getElementsByClassName("name");
const number = document.getElementsByClassName("phone-number");
const email = document.getElementsByClassName("email");

// creating new element using createElement
const bagpipes = document.createElement("label");
// using prepend to add new element to checboxes div
checkboxes.prepend(bagpipes);
// adding class to new label
bagpipes.className = "bagpipes";

// iterating over checkboxes and changing color
// checkboxes.addEventListener("change", function () {
//   if (checkboxes.checked) {
//     document.checkboxes.input.style.color = "purple";
//   }
// });
