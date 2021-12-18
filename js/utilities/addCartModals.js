export function addCartModal() {
  const modalHeader = document.querySelector(".modal-header");

  modalHeader.innerHTML = `<h5 class="modal-title" id="addCartModalLabel"><i class="fas fa-check-circle"></i>You have successfully added this product to your cart</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>`;
}

export function noStockModal() {
  const modalHeader = document.querySelector(".modal-header");

  modalHeader.innerHTML = `<h5 class="modal-title" id="addCartModalLabel"><i class="fas fa-exclamation-triangle"></i>You have already added this product to your cart</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>`;
}
