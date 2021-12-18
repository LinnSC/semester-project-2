import elements from "../../constants/elements.js";

export function saveToken(token) {
  saveToStorage(elements.tokenKey, token);
}

export function saveUser(user) {
  saveToStorage(elements.userKey, user);
}

function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
