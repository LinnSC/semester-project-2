export default function displayMessage(messageType, message, target) {
  const element = document.querySelector(target);

  element.innerHTML = `<div class ="message-container" ><div class =" message ${messageType}">${message}</div></div>`;
}
