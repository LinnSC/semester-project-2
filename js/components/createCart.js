import getExistingProd from "../utilities/storage/getProd.js";

import { removeProduct } from "../utilities/storage/removeProd.js";

import elements from "../constants/elements.js";

export default function createCart() {
  const products = getExistingProd();

  products.forEach((product) => {
    elements.cartContainer.innerHTML += `<tr>
                                          <th scope="row">
                                            <img
                                                src="${product.image}"
                                                class="img-thumbnail"
                                                alt="${product.title}"
                                            />
                                          </th>
                                          <td class="title align-top">${product.title}</td>
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
