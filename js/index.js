console.log(8);

import { fetchProducts } from "./api.js";

fetchProducts()
  .then((productData) => {
    console.log("Fetched product data:", productData);

    const priceElements = document.querySelectorAll(".shopitem p#price");

    productData.forEach((product, index) => {
      const currentPriceElement = priceElements[index];
      currentPriceElement.textContent = `${product.price}$`;
    });
  })
  .catch((error) => {
    console.error("Error in fetchProducts:", error);
  });
