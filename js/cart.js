import getExistingProd from "./utilities/storage/getProd.js";

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
                                    <td class="align-top"><i class="fas fa-trash-alt"></i></td>
                                </tr>`;
});
