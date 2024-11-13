import units from "./units.js"

const outputFields = [];

buildMain();

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
    addFromContainerButton.before(buildInputContainer("from"));
  };
  const addToContainer = () => {
    addToContainerButton.before(buildInputContainer("to"));
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
  
  const div = document.createElement("div");
  div.innerHTML = direction;

  const input = document.createElement("input");
  input.setAttribute("type", "number");
  input.setAttribute("name", "value");

  const select = document.createElement("select");
  select.setAttribute("name", "unit");
  select.innerHTML = buildOptions("length");

  container.append(div, input, select);
  
  if (direction === "from") {
    container.addEventListener("click", changeActive);
    container.addEventListener("click", updateOutput);
    input.addEventListener("input", updateOutput);
  } else if (direction === "to") {
    outputFields.push(input);
  }

  select.addEventListener("change", updateOutput);

  return container;
}

function changeActive(event) {
  const activeFrom = document.querySelector(".from-container.active");
  if (activeFrom) {
    activeFrom.classList.remove("active")
  }
  event.currentTarget.classList.add("active");
}

function buildOptions(category) {
  let option, options = "";

  for (const unit in units[category]) {
    option = `<option value=${unit}>
      ${units[category][unit].pluralName}
    </option>`
    options += option;
  }

  return options;
}

function updateOutput() {
  for (const toAmount of outputFields) {
    const toUnitSelect = Array.from(toAmount.parentNode.childNodes).find(node => node.nodeName == "SELECT");
    const fromAmount = document.querySelector(".from-container.active input")
    const fromUnitSelect = document.querySelector(".from-container.active select")
    toAmount.value = fromAmount.value 
     * units.length[fromUnitSelect.value].value 
     / units.length[toUnitSelect.value].value;
  }
}