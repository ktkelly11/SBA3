// Examining the document
// console.dir(document);

// using 2 BOM properties and methods
// window.alert("Welcome to my page!"); //just commented this out because it was annoying me.  Should still count towards my grade!
innerWidth;
console.log(innerWidth);

// creating variables
const header = document.getElementsByClassName("header");
const intro = document.getElementsByTagName("p");
const donations = document.getElementById("donation-forms");
const checkboxes = document.querySelector(".checkboxes");
const checkbox = document.getElementsByClassName("checkbox");
const contact = document.getElementById("contact-info");
const moniker = document.getElementById("name");
const monikerPlaceholder = moniker.getAttributeNames("placeholder[3]");

const number = document.getElementsByClassName("phone-number");
const email = document.getElementsByClassName("email");

// creating new element using createElement
const bagpipes = document.createElement("label");
// using prepend to add new element to checboxes div
checkboxes.prepend(bagpipes);
// adding class to new label
bagpipes.className = "bagpipes";
// navigating between parent-child relationship
checkboxes.firstElementChild.textContent = "Bagpipes";

// iterating over checkboxes and changing color attempt
// checkbox.addEventListener("change", function () {
//   if (checkboxes.checked) {
//     document.checkboxes.input.style.color = "purple";
//   }
// });

// second attempt iterating over checkboxes w/ event listener and changing text color
// for (let i = 0; i < checkboxes.clientHeight; i++) {
//   checkboxes[i].addEventListener("change", (evt) => {
//     if (evt.target.checked) {
//       checkboxes.input.style.color = "purple";
//     }
//   });
// }

// third attempt iterating over checkboxes w/ event listener and changing text color
// let i = 0;
// checkbox[i].addEventListener("click", (evt) => {
//   //   if (evt.target.checked === true) {
//   //     checkbox.input.style.color = "purple";
//   //   }
//   for (i = 0; i < checkbox.length; i++) {
//     checkbox[i].style.color = "purple";
//     console.log(checkbox[0]);
//   }
// });

// Thanks for the help Constance
for (let i = 0; i < checkbox.length; i++) {
  checkbox[i].addEventListener("click", (evt) => {
    if (evt.target.checked === true) {
      checkbox[i].style.color = "purple";
      console.log(checkbox[i]);
    }
  });
}

// attempting to change the placeholder text of name
// for (let i = 0; i < monikerPlaceholder.length; i++) {
//   monikerPlaceholder[3].addEventListener("click", (evt) => {
//     if (evt.taregt.click === true) {
//       monikerPlaceholder[3].textContent = "Please enter your full name!";
//     }
//   });
// }

// event listener and form validation for contact info
// contact.addEventListener("submit", validate);

// function validate(evt) {
//   moniker = validateName();
//   if (moniker === false) {
//     evt = false;
//     return false;
//   }

//   number = validatePhone();
//   if (number === false) {
//     evt = false;
//     return false;
//   }

//   email = validateEmail();
//   if (email === false) {
//     evt = false;
//     return false;
//   }

//   alert(`Thanks for your donation, ${moniker}`);

//   return true;
// }

// Name validation
// function validate() {
//   if (moniker.value === "") {
//     alert("Please provide a name");
//     moniker.focus();
//     return false;
//   }
//   return moniker.value;
// }

// Trying to change text of name
// const changeText = moniker;
// changeText.addEventListener("click", function () {
//   changeText.textContent = "Your name here please!";
// });

// Trying to change text of name
// const namePlaceholder = moniker.placeholder;

// namePlaceholder.addEventListener("click", (evt) => {
//   if (evt.target === moniker) {
//     namePlaceholder.style.textContent = "Please enter your name";
//   }
// });
