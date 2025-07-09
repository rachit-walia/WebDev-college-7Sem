
const renderProducts = (items) => {
  const container = document.getElementById("store");
  items.map((product) => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";
    productCard.innerHTML = `
      <img src="${product.thumbnail}" alt="${product.title}"/>
      <h3>${product.title}</h3>
      <p>${product.description}</p>
      <p>Price : ${product.price}</p>
    `;
    container.appendChild(productCard);
  });
};
 
const fetchProducts = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    renderProducts(data.products);
  } catch (error) {
    console.log("error fetching products", error);
  }
};

fetchProducts();
