import getExistingProd from "./storage/getProd.js";
import { addToCart, cartCount } from "./storage/addToCart.js";

import { addCartModal, noStockModal } from "./addCartModals.js";

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
    addCartModal();
    cartCount();
  } else {
    noStockModal();
  }
}
