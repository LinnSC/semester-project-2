import getExistingProd from "./storage/getProd.js";
import { addToCart, cartCount } from "./storage/addToCart.js";

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

  const currentProd = getExistingProd();

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
    alert("There are only one of this item in stock.");
  }
}
