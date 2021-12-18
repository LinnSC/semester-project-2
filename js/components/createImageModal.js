import elements from "../constants/elements.js";

export function createImageModal(json) {
  elements.detailsContainer.innerHTML += `<div
                                            class="modal fade"
                                            id="exampleModal"
                                            tabindex="-1"
                                            aria-labelledby="exampleModalLabel"
                                            aria-hidden="true">
                                            <div class="modal-dialog modal-dialog-centered">
                                                <div class="modal-content">
                                                    <button
                                                        type="button"
                                                        class="btn-close"
                                                        data-bs-dismiss="modal"
                                                        aria-label="Close">
                                                    </button>
                                                    <img
                                                        src="${json.image_url}"
                                                        class="img-fluid rounded-start"
                                                        alt="${json.title}"
                                                    />
                                                </div>
                                            </div>
                                        </div>`;
}
