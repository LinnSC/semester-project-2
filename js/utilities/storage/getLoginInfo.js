import elements from "../../constants/elements.js";

export function getToken() {
  return getFromStorage(elements.tokenKey);
}

export function getUsername() {
  const user = getFromStorage(elements.userKey);

  if (user) {
    return user.username;
  }

  return null;
}

function getFromStorage(key) {
  const value = localStorage.getItem(key);

  if (!value) {
    return [];
  }
  return JSON.parse(value);
}
