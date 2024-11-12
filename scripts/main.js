import units from "./units.js"

const fromAmount = document.querySelector(".from-container input")
const toAmount = document.querySelector(".to-container input")

let fromUnitSelect = document.querySelector(".from-container select");
let toUnitSelect = document.querySelector(".to-container select");

fromAmount.addEventListener("input", updateOutput);
fromUnitSelect.addEventListener("change", updateOutput);
toUnitSelect.addEventListener("change", updateOutput);

function updateOutput() {
  toAmount.value = fromAmount.value 
   * units.length[fromUnitSelect.value].value 
   / units.length[toUnitSelect.value].value;
}