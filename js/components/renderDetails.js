import elements from "../constants/elements.js";

// import { cartBtnClick } from "../utilities/cartButton.js";

export function renderDetails(json) {
  elements.detailsContainer.innerHTML = "";

  elements.detailsContainer.innerHTML += `<div class="card mb-3" style="max-width: 800px">
                                            <div class="row g-0">
                                                <div class="col-sm-4">
                                                    <button
                                                    class="modal-btn"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#exampleModal">
                                                        <img
                                                        src="${json.image_url}"
                                                        class="img-fluid rounded-start"
                                                        alt="${json.title}"/>
                                                    </button>
                                                </div>
                                                <div class="col-sm-8 detail-info">
                                                    <div class="card-body">
                                                        <h1 class="card-title">${json.title}</h1>
                                                        <p class="card-price">${json.price} kr</p>
                                                        <p class="card-text">${json.description}</p>
                                                        <div class="center">
                                                            <button 
                                                            data-id="${json.id}" 
                                                            data-title="${json.title}" 
                                                            data-price="${json.price}"
                                                            data-description="${json.description}"
                                                            data-image="${json.image_url}"
                                                            type="button" 
                                                            class="cart-btn btn btn-dark btn-sm">
                                                            Buy now
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>`;
}
