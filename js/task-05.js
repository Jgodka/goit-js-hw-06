const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

inputEl.addEventListener("input", (event) => {
  spanEl.textContent = event.currentTarget.value;
  if (!event.currentTarget.value.trim()) {
    return (spanEl.textContent = "Anonymous");
  }
});
