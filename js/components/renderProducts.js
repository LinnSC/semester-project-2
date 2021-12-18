import elements from "../constants/elements.js";

export function renderProducts(productsToRender) {
  elements.productsContainer.innerHTML = "";

  productsToRender.forEach(function (json) {
    elements.productsContainer.innerHTML += `<div class="col-6 col-md-4">
                                                <a href="product-detail.html?id=${json.id}">
                                                    <div class="card">
                                                    <img
                                                        src="${json.image_url}"
                                                        class="card-img-top"
                                                        alt="${json.title}"
                                                    />
                                                    <div class="card-body">
                                                        <h3>${json.title}</h3>
                                                        <p>${json.price},00 kr</p>
                                                    </div>
                                                    </div>
                                                </a>
                                            </div>`;
  });
}
