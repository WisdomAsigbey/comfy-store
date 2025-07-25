import { getElement } from "../utils.js";
import display from "../displayProducts.js";

const setupCompanies = (store) => {
  let companies = [
    "all",
    ...new Set(store.map((products) => products.company)),
  ];

  const companiesDOM = getElement(".companies");
  companiesDOM.innerHTML = companies
    .map((company) => {
      return `<button class="company-btn">${company}</button>`;
    })
    .join("");

  companiesDOM.addEventListener("click", function (e) {
    const element = e.target;
    if (element.classList.contains("company-btn")) {
      const text = element.textContent;
      let newStore = [];
      if (text === "all") {
        newStore = [...store];
        display(newStore, getElement(".products-container"), true);
      } else {
        newStore = store.filter((product) => product.company === text);
        display(newStore, getElement(".products-container"), true);
      }

      display(newStore, getElement(".products-container"), true);
    }
  });
};

export default setupCompanies;
