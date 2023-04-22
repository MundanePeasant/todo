import "./style.css";

function component() {
  const element = document.createElement("div");

  const elementText = document.createTextNode("Hello there");
  element.appendChild(elementText);

  return element;
}

document.body.appendChild(component());
