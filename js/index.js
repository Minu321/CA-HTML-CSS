console.log(8);

import { fetchProducts } from "./api.js";
// Call the fetchProducts function to get product data
fetchProducts()
  .then((productData) => {
    // Log the fetched data to the console for testing
    console.log("Fetched product data:", productData);

    // Now you can process and display the product data as needed
  })
  .catch((error) => {
    // Handle any errors that may have occurred during the API request
    console.error("Error in fetchProducts:", error);
  });
