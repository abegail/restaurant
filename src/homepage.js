export default function loadHomepage() {
  const contentBlock = document.getElementById("content");

  const heading = document.createElement("h1");
  heading.textContent = "Welcome to the homepage!";
  contentBlock.append(heading);

  const subheading = document.createElement("h2");
  subheading.textContent = "This is a webpack exercise";
  contentBlock.append(subheading);

  const content = document.createElement("p");
  content.textContent =
    "The exercise actually calls for a restaurant website but I'm itching to get to the next module so I'll just blitz through this one :) Click the Menu button above ↑";
  contentBlock.append(content);
}
