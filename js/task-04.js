const decrementEl = document.querySelector("[data-action='decrement']");
const incrementEl = document.querySelector("[data-action='increment']");
const valueEl = document.querySelector("#value");

let countervalue = 0;

decrementEl.addEventListener("click", () => {
  countervalue -= 1;
  updateCounter();
});

incrementEl.addEventListener("click", () => {
  countervalue += 1;
  updateCounter();
});

function updateCounter() {
  valueEl.textContent = countervalue;
}
