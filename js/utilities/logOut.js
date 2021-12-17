import clearLoginKeys from "./storage/clearLoginKeys.js";

export default function logOut() {
  const logoutBtn = document.querySelector("#log-out");

  if (logoutBtn) {
    logoutBtn.addEventListener("click", function () {
      const doLogout = confirm("Are you sure you want to log out?");

      if (doLogout) {
        clearLoginKeys();
        location.href = "/";
      }
    });
  }
}
