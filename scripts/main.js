import units from "./units.js"

buildMain();

const fromAmount = document.querySelector(".from-container input")
const toAmount = document.querySelector(".to-container input")
const unitSelects = document.querySelectorAll("main select");
const fromUnitSelect = document.querySelector(".from-container select");
const toUnitSelect = document.querySelector(".to-container select");

fromAmount.addEventListener("input", updateOutput);
for (const select of unitSelects) {
  select.addEventListener("change", updateOutput);
}

const options = buildOptions("length");
for (const select of unitSelects) {
  for (const option of options) {
    select.append(option.cloneNode(true));
  }
}

function buildMain() {
  const main = document.querySelector("main");
  main.append(buildInputContainer("from"));
  main.append(buildInputContainer("to"));
}

function buildInputContainer(direction) {
  let container = document.createElement("div");
  container.setAttribute("class", direction + "-container");
  
  let content = `
    <div>${direction}:</div>
    <input type="number" name="value"></input>
    <select name="unit"></select>
  `
  
  container.insertAdjacentHTML("afterbegin", content);
  return container;
}

function buildOptions(category) {
  let option, options = [];

  for (const unit in units[category]) {
    option = document.createElement("option");
    option.setAttribute("value", unit);
    option.innerHTML = units[category][unit].pluralName;
    options.push(option);
  }

  return options;
}

function updateOutput() {
  toAmount.value = fromAmount.value 
   * units.length[fromUnitSelect.value].value 
   / units.length[toUnitSelect.value].value;
}