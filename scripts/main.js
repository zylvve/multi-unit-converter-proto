import units from "./units.js"

buildMain();

function buildMain() {
  const main = document.querySelector("main");
  main.append(buildCategorySelector());
  for (const category in units) {
    main.append(buildCategorySection(category));
  }
}

function buildCategorySelector() {
  const select = document.createElement("select");
  select.setAttribute("name", "category");
  select.classList.add("category-selector");
  select.innerHTML = buildCategoryOptions();
  select.addEventListener("change", changeSection);

  return select;
}

function buildCategorySection(category) {
  const section = document.createElement("section");
  section.classList.add('category-section');
  section.setAttribute("id", category);
  section.hidden = (category !== document.querySelector(".category-selector").value);

  const inputs = document.createElement("div");
  inputs.setAttribute("id", "inputs");
  section.append(inputs);
  const outputs = document.createElement("div");
  outputs.setAttribute("id", "outputs");
  section.append(outputs);

  const addFromContainerButton = document.createElement("button");
  const addToContainerButton = document.createElement("button");

  const addFromContainer = () => {
    addFromContainerButton.before(buildInputContainer("from", category));
  };
  const addToContainer = () => {
    addToContainerButton.before(buildInputContainer("to", category));
  };
  
  addFromContainerButton.addEventListener("click", addFromContainer);
  addFromContainerButton.innerHTML = "+";

  addToContainerButton.addEventListener("click", addToContainer);
  addToContainerButton.innerHTML = "+";
  
  inputs.append(addFromContainerButton);
  outputs.append(addToContainerButton);
  addFromContainer();
  addToContainer();
  
  return section;
}

function changeSection(event) {
  for (const section of document.querySelectorAll("section.category-section")) {
    section.hidden = (section.getAttribute("id") !== event.target.value);
  }
}

function buildCategoryOptions() {
  let option, options = "";

  for (const category in units) {
    option = `<option value=${category}>
      ${category}
    </option>`
    options += option;
  }

  return options;
}

function buildInputContainer(direction, category) {
  const container = document.createElement("div");
  container.setAttribute("class", direction + "-container");
  
  const div = document.createElement("div");
  div.innerHTML = direction;

  const input = document.createElement("input");
  input.setAttribute("type", "number");
  input.setAttribute("name", "value");

  const select = document.createElement("select");
  select.setAttribute("name", "unit");
  select.classList.add("unit-selector");
  select.innerHTML = buildUnitOptions(category);

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = '-';
  deleteButton.addEventListener("click", (event) => {
    event.currentTarget.parentNode.remove();
    event.stopPropagation();
  });

  container.append(div, input, select, deleteButton);
  
  if (direction === "from") {
    container.addEventListener("click", changeActive);
    container.addEventListener("click", updateOutput);
    input.addEventListener("input", updateOutput);
  } 

  select.addEventListener("change", updateOutput);

  return container;
}

function deleteInputContainer(event) {
  event.currentTarget.parentNode.remove();
}

function changeActive(event) {
  const activeFrom = document.querySelector(".from-container.active");
  if (activeFrom) {
    activeFrom.classList.remove("active")
  }
  event.currentTarget.classList.add("active");
}

function buildUnitOptions(category) {
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
  const category = document.querySelector(".category-selector").value;
  const outputFields = document.querySelectorAll(`section#${category} .to-container input`);
  
  for (const toField of outputFields) {
    const toUnitSelect = Array.from(toField.parentNode.childNodes).find(node => node.nodeName == "SELECT");
    const fromField = document.querySelector(".from-container.active input")
    const fromUnitSelect = document.querySelector(".from-container.active select")
    toField.value = fromField.value 
     * units[category][fromUnitSelect.value].value 
     / units[category][toUnitSelect.value].value;
  }
}