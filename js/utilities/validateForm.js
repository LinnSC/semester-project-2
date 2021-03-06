export function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

export function checkBoth(value1, value2, len) {
  if (value1.trim().length > len || value2.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

export function checkNumber(numberValue) {
  if (!isNaN(numberValue)) {
    return true;
  } else {
    return false;
  }
}

export function validateEmail(email) {
  const regEx =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const emailValid = regEx.test(email);
  return emailValid;
}

export function checkFour(value1, value2, value3, value4, len) {
  if (
    value1.trim().length > len &&
    value2.trim().length > len &&
    value3.trim().length > len &&
    value4.trim().length > len
  ) {
    return true;
  } else {
    return false;
  }
}

export function checkFive(value1, value2, value3, value4, value5, len) {
  if (
    value1.trim().length > len &&
    value2.trim().length > len &&
    value3.trim().length > len &&
    value4.trim().length > len &&
    value5.trim().length > len
  ) {
    return true;
  } else {
    return false;
  }
}
