import getExistingProd from "../utilities/storage/getProd.js";
import { addToCart } from "../utilities/storage/addToCart.js";

const currentProd = getExistingProd();

export default function createCart() {
  const products = getExistingProd();

  const cartContainer = document.querySelector(".cart__product");

  products.forEach((product) => {
    cartContainer.innerHTML += `<tr>
                                        <th scope="row">
                                        <img
                                            src="${product.image}"
                                            class="img-thumbnail"
                                            alt="${product.title}"
                                        />
                                        </th>
                                        <td class="align-top">${product.title}</td>
                                        <td class="align-top">${product.price}</td>
                                        <td class="align-top">
                                        <i data-id="${product.id}"  
                                        class="fas fa-trash-alt">
                                        </i>
                                        </td>
                                    </tr>`;
  });
  trashBtnClick();
}

export function trashBtnClick() {
  const trashButton = document.querySelectorAll(".fa-trash-alt");

  trashButton.forEach((button) => {
    button.addEventListener("click", removeProduct);
  });
}

function removeProduct() {
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
