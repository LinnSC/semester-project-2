import getExistingProd from "./storage/getProd.js";
import elements from "../constants/elements.js";

export default function cartSummary() {
  const cart = getExistingProd();

  let cartTotal = 0;
  let shipping = 99;

  cart.forEach((product) => {
    const prodPrice = product.price;

    cartTotal += Number.parseFloat(prodPrice);
  });

  const total = cartTotal + shipping;

  elements.sumProd.innerHTML += `${cartTotal},00 kr`;
  elements.sumShip.innerHTML += `${shipping},00 kr`;
  elements.sumTotal.innerHTML += `${total},00 kr`;
}
