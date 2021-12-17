export function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

export function checkAll(value1, value2, len) {
  if (value1.trim().length > len || value2.trim().length > len) {
    return true;
  } else {
    return false;
  }
}
