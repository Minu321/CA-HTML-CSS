console.log(8);

import { fetchProducts } from "./api.js";

fetchProducts()
  .then((productData) => {
    console.log("Fetched product data:", productData);

    const imageElement = document.querySelectorAll(".shopitem img#shopimage");
    const titleElement = document.querySelectorAll(".shopitem h2#title");
    const priceElements = document.querySelectorAll(".shopitem p#price");
    const descriptionElement = document.querySelectorAll(
      ".shopitem p#description"
    );

    productData.forEach((product, index) => {
      const currentImageElement = imageElement[index];
      currentImageElement.src = product.image;
      currentImageElement.alt = `Image showing the game cover for the game $(product.title)`;

      const currentTitleElement = titleElement[index];
      currentTitleElement.textContent = product.title;

      const currentPriceElement = priceElements[index];
      currentPriceElement.textContent = `${product.price}$`;

      const currenDescriptionElement = descriptionElement[index];
      currenDescriptionElement.textContent = product.description;
    });
  })
  .catch((error) => {
    console.error("Error in fetchProducts:", error);
  });
