import { getElement } from "../utils.js";
import display from "../displayProducts.js";

const setupPrice = (store) => {
  const priceInput = getElement(".price-filter");
  const priceValue = getElement(".price-value");
  //   setup filter
  let maxPrice = store.map((product) => product.price);
  maxPrice = Math.max(...maxPrice);
  maxPrice = Math.ceil(maxPrice / 100);
  priceInput.value = maxPrice;
  priceInput.min = 0;
  priceInput.max = maxPrice;
  priceValue.textContent = `Value : $${maxPrice}`;

  priceInput.addEventListener("input", () => {
    const value = parseInt(priceInput.value);
    // console.log(value);

    priceValue.textContent = `Value : $${value}`;
    let newStore = store.filter((product) => product.price / 100 < value);
    display(newStore, getElement(".products-container"), true);
    if (newStore.length < 1) {
      const products = getElement(".products-container");
      products.innerHTML = `<h3 class = "filter-error">sorry, no products match your search</h3>`;
    }
  });
};

export default setupPrice;
