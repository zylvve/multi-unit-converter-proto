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
  const inputs = document.createElement("div");
  inputs.setAttribute("id", "inputs");
  main.append(inputs);
  const outputs = document.createElement("div");
  outputs.setAttribute("id", "outputs");
  main.append(outputs);

  const addFromContainerButton = document.createElement("button");
  const addToContainerButton = document.createElement("button");

  const addFromContainer = () => {
    addFromContainerButton.before(buildInputContainer("from"))
  };
  const addToContainer = () => {
    addToContainerButton.before(buildInputContainer("to"))
  };
  
  addFromContainerButton.addEventListener("click", addFromContainer);
  addFromContainerButton.innerHTML = "+";

  addToContainerButton.addEventListener("click", addToContainer);
  addToContainerButton.innerHTML = "+";
  
  inputs.append(addFromContainerButton);
  outputs.append(addToContainerButton);
  addFromContainer();
  addToContainer();
}

function buildInputContainer(direction) {
  const container = document.createElement("div");
  container.setAttribute("class", direction + "-container");
  
  const content = `
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