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
});
