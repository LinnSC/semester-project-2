import { PRODUCTS_URL } from "./constants/api.js";
import { renderProducts } from "./components/renderProducts.js";
import { searchProducts } from "./utilities/searchProducts.js";
import displayMessage from "./components/displayMessage.js";
import MESSAGES from "./constants/messages.js";
import { WARNING_CLASS, SHOW_MESSAGE, ERROR_CLASS } from "./constants/misc.js";

export async function getProducts() {
  try {
    const response = await fetch(PRODUCTS_URL);
    const json = await response.json();

    renderProducts(json);
    searchProducts(json);
  } catch (error) {
    displayMessage(ERROR_CLASS, MESSAGES.error_message, SHOW_MESSAGE);
  }
}

getProducts();

// const productsContainer = document.querySelector(".products-container");

// function searchProducts(products) {
//   const search = document.querySelector(".search");

//   search.onkeyup = function (event) {
//     const searchValue = event.target.value.trim().toLowerCase();

//     const filteredProduct = products.filter(function (json) {
//       if (json.title.toLowerCase().includes(searchValue)) {
//         return true;
//       }
//       if (json.description.toLowerCase().includes(searchValue)) {
//         return true;
//       }
//     });

//     renderProducts(filteredProduct);

//     if (filteredProduct.length === 0) {
//       displayMessage(WARNING_CLASS, MESSAGES.no_result, SHOW_MESSAGE);

//       console.log("no result");
//     } else {

//       renderProducts(filteredProduct);
//     }

//     // if (filteredProduct.length) {
//     //   renderProducts(filteredProduct);
//     // }

//     // if (searchValue.length === 0) {
//     //   renderProducts(filteredProduct);
//     // }
//   };
// }
