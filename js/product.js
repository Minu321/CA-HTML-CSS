console.log(8);

function getProductIdFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("id");
}

function fetchProductDetails(productId) {
  const apiUrl = `https://api.noroff.dev/api/v1/gamehub/${productId}`;

  return fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })

    .catch((error) => {
      console.error("Error fetching product data"), error;
      throw error;
    });
}
function updateProductPage(productData) {
  const titleElement = document.querySelector("h1");
  const imageElement = document.querySelector("img.shopimagebig");
  const descriptionElement = document.querySelector("p#description");
  const priceElement = document.querySelector("p#price");

  titleElement.textContent = productData.title;
  imageElement.src = productData.image;
  imageElement.alt = `Image showing the game cover for the game ${productData.title}`;
  descriptionElement.textContent = productData.description;
  priceElement.textContent = productData.price;
}
const productId = getProductIdFromUrl();
fetchProductDetails(productId)
  .then((productData) => {
    updateProductPage(productData);
  })
  .catch((error) => {
    console.error("Error in fetchProductDetails:", error);
  });
