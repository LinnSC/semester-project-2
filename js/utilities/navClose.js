export default function navClose() {
  const navBar = document.querySelector(".navbar-collapse");
  document.addEventListener("click", function (event) {
    if (event.target.closest(".navbar")) {
      return;
    }

    navBar.classList.remove("show");
  });
}
