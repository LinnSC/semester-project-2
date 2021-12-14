export function addToCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));

  //   let cartLength = JSON.parse(localStorage.getItem("cart")).length;

  //   console.log(cartLength);

  //   const cartCount = document.querySelector(".cart-count p");

  //   cartCount.innerHTML = `<p>${cartLength}</p>`;
}

export function cartCount() {
  let cartLength = JSON.parse(localStorage.getItem("cart")).length;

  console.log(cartLength);

  const cartCount = document.querySelector(".cart-count p");

  cartCount.innerHTML = `<p>${cartLength}</p>`;
}
