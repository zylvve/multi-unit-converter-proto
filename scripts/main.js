import units from "./units.js"

buildMain();

function buildMain() {
  const main = document.querySelector("main");
  main.append(buildCategoryMenu());
  for (const category in units) {
    main.append(buildCategorySection(category));
  }
}

function buildCategoryMenu() {
  const defaultCategory = "length";
  const menu = document.createElement("menu");
  menu.setAttribute("id", "category-menu");
  menu.setAttribute("data-active-category", defaultCategory);

  let li;
  for (const category in units) {
    li = document.createElement("li");
    li.setAttribute("data-category", category);
    li.insertAdjacentHTML("afterbegin", `<img src="./svg/${category}.svg" alt="${category}"></img>`);

    if (category === defaultCategory) {
      li.classList.add("active-menu-item");
    }
    
    li.addEventListener("click", changeSection);

    menu.append(li);
  }

  return menu;
}

function buildCategorySection(category) {
  const section = document.createElement("section");
  section.classList.add('category-section');
  section.setAttribute("id", category);
  section.hidden = (category !== document.querySelector("#category-menu").getAttribute("data-active-category"));

  const inputs = document.createElement("div");
  inputs.classList.add("inputs-container");
  inputs.insertAdjacentHTML("afterbegin", "<span>FROM</span>");
  section.append(inputs);

  const outputs = document.createElement("div");
  outputs.classList.add("outputs-container");
  outputs.insertAdjacentHTML("afterbegin", "<span>TO</span>");
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
  addFromContainerButton.classList.add("add-button");

  addToContainerButton.addEventListener("click", addToContainer);
  addToContainerButton.innerHTML = "+";
  addToContainerButton.classList.add("add-button");
  
  inputs.append(addFromContainerButton);
  outputs.append(addToContainerButton);
  addFromContainer();
  addToContainer();
  
  return section;
}

function changeSection(event) {
  const newCategory = event.currentTarget.getAttribute("data-category");
  
  const menu = document.querySelector("#category-menu");
  menu.setAttribute("data-active-category", newCategory);
  
  for (const li of menu.childNodes) {
    if (li.getAttribute("data-category") === newCategory) {
      li.classList.add("active-menu-item")
    } else {
      li.classList.remove("active-menu-item")
    }
  }
  
  for (const section of document.querySelectorAll("section.category-section")) {
    section.hidden = (section.getAttribute("id") !== newCategory);
  }
}

function buildInputContainer(direction, category) {
  const container = document.createElement("div");
  container.setAttribute("class", direction + "-container");
  
  const input = document.createElement("input");
  input.setAttribute("type", "number");
  input.setAttribute("name", "amount");

  const select = document.createElement("select");
  select.setAttribute("name", "unit");
  select.classList.add("unit-selector");
  select.innerHTML = buildUnitOptions(category);

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = '✖';
  deleteButton.classList.add("delete-button");
  deleteButton.addEventListener("click", (event) => {
    event.currentTarget.parentNode.remove();
    event.stopPropagation();
  });

  container.append(input, select, deleteButton);
  
  if (direction === "from") {
    container.addEventListener("click", changeActive);
    container.addEventListener("click", updateOutput);
    input.addEventListener("input", updateOutput);
  } 
  input.readOnly = (direction === "to");

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

function buildUnitOptions(category) {
  let option, options = "";

  for (const unit in units[category]) {
    option = `<option value=${unit} label=${unit} title=${units[category][unit].pluralName}></option>`
    options += option;
  }

  return options;
}

function updateOutput() {
  const category = document.querySelector("#category-menu").getAttribute("data-active-category");
  const outputFields = document.querySelectorAll(`section#${category} .to-container input`);
  
  for (const toField of outputFields) {
    const toUnitSelectValue = Array.from(toField.parentNode.childNodes).find(node => node.nodeName == "SELECT").value;
    const fromUnitSelectValue = document.querySelector(".from-container.active select").value;

    const fromAmount = document.querySelector(".from-container.active input").value;

    const fromValue = units[category][fromUnitSelectValue].value;
    const toValue = units[category][toUnitSelectValue].value;

    const fromZero = units[category][fromUnitSelectValue].zero ?? 0;
    const toZero = units[category][toUnitSelectValue].zero ?? 0;
    
    toField.value = ((fromZero + fromAmount * fromValue) - toZero) / toValue;
  }
}