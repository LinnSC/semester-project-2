import getExistingProd from "./storage/getProd.js";
import { addToCart, cartCount } from "./storage/addToCart.js";

import displayAlert from "../components/displayAlert.js";

import { WARNING_ALERT, SHOW_ALERT } from "../constants/misc.js";

import MESSAGES from "../constants/messages.js";

const currentProd = getExistingProd();

export function cartBtnClick() {
  const cartButton = document.querySelector(".cart-btn");

  cartButton.addEventListener("click", handleClick);
}

function handleClick() {
  const id = this.dataset.id;
  const title = this.dataset.title;
  const price = this.dataset.price;
  const image = this.dataset.image;
  const description = this.dataset.description;

  const productExists = currentProd.find(function (cart) {
    return cart.id === id;
  });

  if (!productExists) {
    const product = {
      id: id,
      title: title,
      price: price,
      image: image,
      description: description,
    };

    currentProd.push(product);

    addToCart(currentProd);

    cartCount();
  } else {
    // const container = document.querySelector(".alert-container");

    // container.innerHTML += `<div class="alert alert-warning alert-dismissible fade show" role="alert">
    //                           <p><strong>We are sorry!</strong> There are only one of this item in stock.</p>
    //                           <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    //                       </div>`;

    displayAlert(WARNING_ALERT, MESSAGES.no_more_stock, SHOW_ALERT);
  }
}
