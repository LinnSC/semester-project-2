export default function createAlertModal(
  modalType,
  modalTitle,
  message,
  target
) {
  const element = document.querySelector(target);

  element.innerHTML = `<div class="${modalType} modal fade" id="alertModal" tabindex="-1" aria-labelledby="alertModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-header">
                                <h5 class="modal-title" id="alertModalLabel">${modalTitle}</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                <p>${message}</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        
                        `;
}
