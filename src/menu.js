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
    "The webpack part is the most important concept here. But if you still want to see a list of dishes, I won't disappoint you. So here's a few of my favorites:";
  contentBlock.append(content);

  const faveFood1 = document.createElement("li");
  faveFood1.textContent = "Baked scallops";
  contentBlock.append(faveFood1);

  const faveFood2 = document.createElement("li");
  faveFood2.textContent = "Pizza";
  contentBlock.append(faveFood2);

  const faveFood3 = document.createElement("li");
  faveFood3.textContent = "Grilled salmon";
  contentBlock.append(faveFood3);
}
