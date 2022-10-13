// ----------***BURGER-MENU----------

function burgerMenu() {
  var burgerSec = document.getElementById("burger-sec");
  if (burgerSec.style.display === "block") {
    burgerSec.style.display = "none";
  } else {
    burgerSec.style.display = "block";
  }
}

// ----------BURGER-MENU***----------

// ----------***EMAIL-VALIDATION----------

var emailResult = document.getElementById("email-result");

function validateEmail() {
  var emailValue = document.getElementById("input-email").value;
  var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  if (emailValue.match(mailformat)) {
    emailResult.innerHTML = "Successfully sent!";
  } else {
    emailResult.innerHTML = "Invalid email address!";
  }
  document.form.reset();
}

// ----------EMAIL-VALIDATION***----------
