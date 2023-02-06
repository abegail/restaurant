import loadHomepage from "./homepage";
import loadMenu from "./menu";
import "./style.css";

const navigation = document.getElementById("nav");

const contentBlock = document.getElementById("content");

const homeButton = document.createElement("button");
homeButton.textContent = "Home";
navigation.append(homeButton);

const menuButton = document.createElement("button");
menuButton.textContent = "Menu";
navigation.append(menuButton);

function clearPage() {
  let child = contentBlock.lastElementChild;
  while (child) {
    contentBlock.removeChild(child);
    child = contentBlock.lastElementChild;
  }
}

function applyStyle() {
  const allElements = document.querySelectorAll("*");
  allElements.forEach((element) => {
    element.classList.add("applied");
  });

  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.classList.add("button");
  });
}

menuButton.addEventListener("click", () => {
  clearPage();
  loadMenu();
  applyStyle();
  menuButton.classList.add("active-button");
  homeButton.classList.remove("active-button");
});

homeButton.addEventListener("click", () => {
  clearPage();
  loadHomepage();
  applyStyle();
  homeButton.classList.add("active-button");
  menuButton.classList.remove("active-button");
});

loadHomepage();
applyStyle();
homeButton.classList.add("active-button");
