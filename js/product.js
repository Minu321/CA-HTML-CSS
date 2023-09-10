function showLoadingIndicator() {
  const loadingElement = document.getElementById("loading");
  loadingElement.style.display = "block";
}

function hideLoadingIndicator() {
  const loadingElement = document.getElementById("loading");
  loadingElement.style.display = "none";
}

showLoadingIndicator();

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
    .then((productData) => {
      return productData;
    })
    .catch((error) => {
      console.error("Error fetching product data", error);
      displayErrorMessage("An error occurred. Please try again later.");
      throw error;
    });
}

function updateProductPage(productData) {
  const titleElement = document.querySelector("h1");
  const imageElement = document.querySelector("img.shopimagebig");
  const descriptionElement = document.querySelector("p#description");
  const releaseElement = document.querySelector("p#release");
  const genreElement = document.querySelector("p#genre");
  const ageElement = document.querySelector("p#age");
  const priceElement = document.querySelector("p#price");

  hideLoadingIndicator();

  titleElement.textContent = productData.title;
  imageElement.src = productData.image;
  imageElement.alt = `Image showing the game cover for the game ${productData.title}`;
  descriptionElement.textContent = productData.description;
  releaseElement.textContent = `Released: ${productData.released}`;
  genreElement.textContent = `Genre: ${productData.genre}`;
  ageElement.textContent = `Age Rating: ${productData.ageRating}`;
  priceElement.textContent = `$ ${productData.price}`;
}

const productId = getProductIdFromUrl();
fetchProductDetails(productId)
  .then((productData) => {
    updateProductPage(productData);
  })
  .catch((error) => {
    console.error("Error in fetchProductDetails:", error);
  });
