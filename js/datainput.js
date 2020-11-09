/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// dropdown content change depending on the page

// data validation

// There are fewer ways to pick a DOM node with legacy browsers
const form  = document.getElementsByTagName('form')[0];
const dataInput = document.getElementById('feed_consumption');

// The following is a trick to reach the next sibling Element node in the DOM
// This is dangerous because you can easily build an infinite loop.
// In modern browsers, you should prefer using element.nextElementSibling
let error = dataInput;
while ((error = error.nextSibling).nodeType != 1);

// As per the HTML5 Specification
const dataInputRegExp = /^[0-9]+$/;

// Many legacy browsers do not support the addEventListener method.
// Here is a simple way to handle this; it's far from the only one.
function addEvent(element, event, callback) {
  let previousEventCallBack = element["on"+event];
  element["on"+event] = function (e) {
    const output = callback(e);

    // A callback that returns `false` stops the callback chain
    // and interrupts the execution of the event callback.
    if (output === false) return false;

    if (typeof previousEventCallBack === 'function') {
      output = previousEventCallBack(e);
      if(output === false) return false;
    }
  }
};

// Now we can rebuild our validation constraint
// Because we do not rely on CSS pseudo-class, we have to 
// explicitly set the valid/invalid class on our dataInput field
addEvent(window, "load", function () {
  // Here, we test if the field is empty (remember, the field is not required)
  // If it is not, we check if its content is a well-formed e-mail address.
  const test = dataInput.value.length === 0 || dataInputRegExp.test(dataInput.value);

  dataInput.className = test ? "valid" : "invalid";
});

// This defines what happens when the user types in the field
addEvent(dataInput, "input", function () {
  const test = dataInput.value.length === 0 || dataInputRegExp.test(dataInput.value);
  if (test) {
    dataInput.className = "valid";
    error.innerHTML = "";
    error.className = "error";
  } else {
    dataInput.className = "invalid";
  }
});

// This defines what happens when the user tries to submit the data
addEvent(form, "submit", function () {
  const test = dataInput.value.length === 0 || dataInputRegExp.test(dataInput.value);

  if (!test) {
    dataInput.className = "invalid";
    error.innerHTML = "I expect an e-mail, darling!";
    error.className = "error active";

    // Some legacy browsers do not support the event.preventDefault() method
    return false;
  } else {
    dataInput.className = "valid";
    error.innerHTML = "";
    error.className = "error";
  }
});



