import loadHomepage from "./homepage";
import loadMenu from "./menu";

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

menuButton.addEventListener("click", () => {
  clearPage();
  loadMenu();
});

homeButton.addEventListener("click", () => {
  clearPage();
  loadHomepage();
});

loadHomepage();
