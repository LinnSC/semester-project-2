import elements from "../constants/elements.js";

export function renderFeatured(featuredProd) {
  elements.featuredContainer.innerHTML = "";

  const featuredHeader = document.querySelector(".featured__header");

  featuredHeader.innerHTML += `<h2>New in</h2>`;

  featuredProd.forEach(function (json) {
    elements.featuredContainer.innerHTML += `<div class="col-6 col-md-4">
                                          <a href="product-detail.html?id=${json.id}">
                                              <div class="card">
                                                  <img
                                                  src="${json.image_url}"
                                                  class="card-img-top"
                                                  alt="${json.title}"
                                                  />
                                                  <div class="card-body">
                                                      <h3>${json.title}</h3>
                                                  </div>
                                              </div>
                                          </a>
                                      </div>`;
  });
}
