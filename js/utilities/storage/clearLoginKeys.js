export default function clearLoginKeys() {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
}
