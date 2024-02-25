// Username

function checkUsername() {
  let failTextField = document.querySelector(".username-container .fail-text");
  let textLabel = document.querySelector(".username-input");
  let text = textLabel.value;
  if (text.length < 3) {
    failTextField.innerHTML = "Username must be at least 3 characters";
    failLabel(textLabel);
  } else if (text.length > 15) {
    failTextField.innerHTML = "Username must be less than 15 characters";
    failLabel(textLabel);
  } else {
    failTextField.innerHTML = "";
    successLabel(textLabel);
  }
}

function checkEmail() {
  let failTextField = document.querySelector(".email-container .fail-text");
  let textLabel = document.querySelector(".email-input");
  let text = textLabel.value;
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!text.match(re)) {
    failTextField.innerHTML = "Email is not valid";
    failLabel(textLabel);
  } else {
    failTextField.innerHTML = "";
    successLabel(textLabel);
  }
}

function checkPassword() {
  let failTextField = document.querySelector(".password-container .fail-text");
  let textLabel = document.querySelector(".password-input");
  let text = textLabel.value;

  if (text.length < 8) {
    failTextField.innerHTML = "Password must be at least 8 characters";
    failLabel(textLabel);
  } else {
    failTextField.innerHTML = "";
    successLabel(textLabel);
  }
}

function checkSecondPassword() {
  let failTextField = document.querySelector(
    ".password-confirm-container .fail-text"
  );
  let textLabel = document.querySelector(".password-confirm-input");
  let text = textLabel.value;

  let textLabelPassword = document.querySelector(".password-input");
  let textPassword = textLabelPassword.value;

  if (text != textPassword) {
    failTextField.innerHTML = "Passwords do not match";
    failLabel(textLabel);
  } else if (text === "") {
    failTextField.innerHTML = "Password required";
    failLabel(textLabel);
  } else {
    failTextField.innerHTML = "";
    successLabel(textLabel);
  }
}

function failLabel(textLabel) {
  textLabel.classList.remove("fail-label");
  textLabel.classList.remove("success-label");
  textLabel.classList.add("fail-label");
}

function successLabel(textLabel) {
  textLabel.classList.remove("fail-label");
  textLabel.classList.remove("success-label");
  textLabel.classList.add("success-label");
}

let button = document.querySelector(".button");
button.addEventListener("click", () => {
  checkUsername();
  checkEmail();
  checkPassword();
  checkSecondPassword();
});
