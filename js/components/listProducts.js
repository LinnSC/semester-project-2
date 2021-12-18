import elements from "../constants/elements.js";
import { DETAILS_URL } from "../constants/api.js";
import { getToken } from "../utilities/storage/getLoginInfo.js";

export function listProducts(listProd) {
  elements.prodContainer.innerHTML = "";

  listProd.forEach(function (json) {
    elements.prodContainer.innerHTML += `<tr>
                                    <th scope="row">
                                    <a href="editProduct.html?id=${json.id}">
                                    <img
                                        src="${json.image_url}"
                                        class="img-thumbnail"
                                        alt="${json.title}"
                                    />
                                    </a>
                                    </th>
                                    <td class="title align-top">
                                        <a href="editProduct.html?id=${json.id}">
                                            ${json.title}
                                        </a>
                                    </td>
                                    <td class="align-top">${json.price},00 kr</td>
                                </tr>`;
  });
}
