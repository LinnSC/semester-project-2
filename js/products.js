import { PRODUCTS_URL } from "./constants/api.js";
import { renderProducts } from "./components/renderProducts.js";
import { searchProducts } from "./utilities/searchProducts.js";
import displayMessage from "./components/displayMessage.js";
import MESSAGES from "./constants/messages.js";
import { SHOW_MESSAGE, ERROR_CLASS } from "./constants/misc.js";

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
