import { getElement } from "../utils.js";
import display from "../displayProducts.js";

const form = getElement(".input-form");
const inputValue = getElement(".search-input");

const setupSearch = (store) => {
  form.addEventListener("keyup", function () {
    const value = inputValue.value;

    if (value) {
      const newStore = store.filter((products) => {
        let { name } = products;
        name = name.toLowerCase();
        if (name.startsWith(value)) {
          return products;
        }
      });
      display(newStore, getElement(".products-container"), true);
      if (newStore.length < 1) {
        const productsDOM = getElement(".products-container");
        productsDOM.innerHTML = `<h3 class = "filter-error">sorry, no products matched your search</h3>`;
      }
    } else {
      display(store, getElement(".products-container"), true);
    }
  });
};

export default setupSearch;
