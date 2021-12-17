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

// export function getToken() {
//   return getFromStorage(elements.tokenKey);
// }

// export function getUsername() {
//   const user = getFromStorage(elements.userKey);

//   if (user) {
//     return user.username;
//   }

//   return null;
// }

// function getFromStorage(key) {
//   const value = localStorage.getItem(key);

//   if (!value) {
//     return [];
//   }
//   return JSON.parse(value);
// }
