function fetchProducts() {
  const apiUrl = "https://api.noroff.dev/api/v1/gamehub";

  return fetch(apiUrl, {
    method: "GET",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      return response.json();
    })
    .catch((error) => {
      console.error("Error fetching product data:", error);
      throw error;
    });
}

export { fetchProducts };
