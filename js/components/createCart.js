import getExistingProd from "../utilities/storage/getProd.js";

import { removeProduct } from "../utilities/storage/removeProd.js";

import elements from "../constants/elements.js";

export default function createCart() {
  const products = getExistingProd();

  products.forEach((product) => {
    elements.prodContainer.innerHTML += ` <tr>
                                          <th scope="row">
                                            <a href="product-detail.html?id=${product.id}">
                                              <img
                                                src="${product.image}"
                                                class="img-thumbnail"
                                                alt="${product.title}"
                                              />
                                            </a>
                                          </th>
                                          <td class="title align-top">
                                            <a href="product-detail.html?id=${product.id}">${product.title}</a>
                                          </td>
                                          <td class="align-top">${product.price},00 kr</td>
                                          <td class="align-top">
                                            <i data-id="${product.id}"  
                                            class="fas fa-trash-alt">
                                            </i>
                                          </td>
                                      </tr>`;
  });
  trashBtnClick();
}
function trashBtnClick() {
  const trashButton = document.querySelectorAll(".fa-trash-alt");

  trashButton.forEach((button) => {
    button.addEventListener("click", removeProduct);
  });
}
