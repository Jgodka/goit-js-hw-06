const inputEl = document.querySelector("#validation-input");
inputEl.addEventListener("blur", borderColor);

function borderColor() {
  const inputValidEl = Number(inputEl.dataset.length);
  const inputInvalidEl = inputEl.value.length;
  inputEl.classList.remove("invalid", "valid");

  if (inputInvalidEl === inputValidEl) {
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.add("invalid");
  }
}
