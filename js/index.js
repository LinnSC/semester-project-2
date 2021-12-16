import { FEATURED_URL } from "./constants/api.js";

import displayMessage from "./components/displayMessage.js";
import MESSAGES from "./constants/messages.js";
import { SHOW_MESSAGE, ERROR_CLASS } from "./constants/misc.js";

export async function getFeatured() {
  try {
    const response = await fetch(FEATURED_URL);
    const json = await response.json();

    console.log(json);

    renderFeatured(json);
  } catch (error) {
    displayMessage(ERROR_CLASS, MESSAGES.error_message, SHOW_MESSAGE);
  }
}

getFeatured();

function renderFeatured(featuredProd) {
  const featuredContainer = document.querySelector(".featured__cards");

  featuredContainer.innerHTML = "";

  featuredProd.forEach(function (json) {
    featuredContainer.innerHTML += `<div class="col-6 col-md-4">
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
