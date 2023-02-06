export default function loadMenu() {
  const contentBlock = document.getElementById("content");

  const heading = document.createElement("h1");
  heading.textContent = 'You\'re now in the "Menu" page';
  contentBlock.append(heading);

  const subheading = document.createElement("h2");
  subheading.textContent = "Just cut me some slack";
  contentBlock.append(subheading);

  const content = document.createElement("p");
  content.textContent =
    "The webpack part is the most important thing concept here. But if you still want to see a list of dishes, here's a few of my favorites:";
  contentBlock.append(content);

  const faveFoods = document.createElement("li");
  faveFoods.textContent = "Bakes scallops";
  contentBlock.append(faveFoods);
}
