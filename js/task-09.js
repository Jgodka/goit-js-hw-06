const bodyEl = document.querySelector(".widget");
const btnEl = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");
console.log(bodyEl);
console.log(btnEl);
console.log(spanEl);

btnEl.addEventListener("click", () => {
  let hexColor = getRandomHexColor();
  bodyEl.style.backgroundColor = hexColor;
  spanEl.textContent = hexColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
