import getExistingProd from "./getProd.js";
import { addToCart } from "./addToCart.js";

const currentProd = getExistingProd();

export function removeProduct() {
  const id = this.dataset.id;

  const productExists = currentProd.find(function (cart) {
    return cart.id === id;
  });

  if (productExists) {
    const newCart = currentProd.filter((prod) => prod.id !== id);

    addToCart(newCart);

    document.location.reload();
  }
}
