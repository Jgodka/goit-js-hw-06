const inputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");

inputEl.addEventListener("input", onSize);

function onSize() {
  spanEl.style.fontSize = inputEl.value + "px";
}
