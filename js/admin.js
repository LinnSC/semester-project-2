import elements from "./constants/elements.js";
import addProdSubmit from "./utilities/addProd/addProdSubmit.js";
import { PRODUCTS_URL } from "./constants/api.js";
import { listProducts } from "./components/listProducts.js";

import displayMessage from "./components/displayMessage.js";
import MESSAGES from "./constants/messages.js";
import { SHOW_MESSAGE, ERROR_CLASS } from "./constants/misc.js";
import rederect from "./utilities/rederect.js";

elements.form.addEventListener("submit", addProdSubmit);

rederect();

export async function getListProducts() {
  try {
    const response = await fetch(PRODUCTS_URL);
    const json = await response.json();

    listProducts(json);
  } catch (error) {
    displayMessage(ERROR_CLASS, MESSAGES.error_message, SHOW_MESSAGE);

    console.log(error);
  }
}

getListProducts();

elements.reloadBtn.addEventListener("click", function () {
  getListProducts();
});
