import createCart from "./components/createCart.js";

import getExistingProd from "./utilities/storage/getProd.js";

import MESSAGES from "./constants/messages.js";
import displayMessage from "./components/displayMessage.js";
import { SHOW_MESSAGE, ALERT_CLASS } from "./constants/misc.js";

const cart = getExistingProd();

if (cart.length) {
  createCart();
} else {
  displayMessage(ALERT_CLASS, MESSAGES.no_cart, SHOW_MESSAGE);
}
