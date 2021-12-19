import { renderProducts } from "../components/renderProducts.js";
import displayMessage from "../components/displayMessage.js";
import MESSAGES from "../constants/messages.js";
import { WARNING_CLASS, SHOW_MESSAGE } from "../constants/misc.js";
import elements from "../constants/elements.js";

export function searchProducts(title) {
  elements.search.onkeyup = function (event) {
    const searchValue = event.target.value.trim().toLowerCase();

    const filteredProduct = title.filter(function (product) {
      if (product.title.toLowerCase().includes(searchValue)) {
        return true;
      }
      if (product.description.toLowerCase().includes(searchValue)) {
        return true;
      }
    });

    if (filteredProduct.length === 0) {
      elements.productsContainer.innerHTML = "";
      displayMessage(WARNING_CLASS, MESSAGES.no_result, SHOW_MESSAGE);
    } else {
      elements.messageContainer.innerHTML = "";
      renderProducts(filteredProduct);
    }
  };
}
