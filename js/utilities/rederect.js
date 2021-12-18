import { getToken } from "./storage/getLoginInfo.js";

export default function rederect() {
  const token = getToken();
  if (!token) {
    location.href = "/";
  }
}
