export default function displayAlert(alertType, message, target) {
  const element = document.querySelector(target);

  element.innerHTML = `<div class="alert ${alertType} alert-dismissible fade show" role="alert">
                          <p>${message}</p>
                          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                      </div>`;
}
