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

    // const modalContainer = document.querySelector(".alert-container");

    // modalContainer.innerHTML += `<div class=" modal fade" id="alertModal" tabindex="-1" aria-labelledby="alertModalLabel" aria-hidden="true">
    //                             <div class="modal-dialog modal-dialog-centered">
    //                             <div class="modal-content">
    //                                 <div class="modal-header">
    //                                 <h5 class="modal-title" id="alertModalLabel">Hello</h5>
    //                                 <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    //                                 </div>
    //                                 <div class="modal-body">
    //                                 <p>Hello</p>
    //                                 </div>
    //                             </div>
    //                             </div>
    //                         </div>`;
  } else {
    displayAlert(WARNING_ALERT, MESSAGES.no_more_stock, SHOW_ALERT);
    window.scrollTo(0, 0);
  }
}
