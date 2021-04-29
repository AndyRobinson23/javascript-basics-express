const negate = a => {
  return !a;
};

const both = (a, b) => {
  if (a == true && b == true) {
    return true;
  } else {
    return false;
  };
};

const either = (a, b) => {
  if (a === true || b === true) {
    return true;
  } else {
    return false;
  };
};

const none = (a, b) => {
  if (a !== true && b !== true) {
    return true;
  } else {
    return false;
  };
};

const one = (a, b) => {
  let numberTrue = !!a + !!b;
  if (numberTrue === 1) {
    return true;
  } else {
    return false;
  };
};

const truthiness = a => {
  if (a) {
    return true;
  } else {
    return false;
  }
};

const isEqual = (a, b) => {
  if (a == b) {
    return true;
  } else {
    return false;
  }
};

const isGreaterThan = (a, b) => {
  if (a > b) {
    return true;
  } else {
    return false;
  }
};

const isLessThanOrEqualTo = (a, b) => {
  if (a <= b) {
    return true;
  } else {
    return false;
  }
};

const isOdd = a => {
  if (a % 2 === 1) {
    return true;
  } else {
    return false;
  }
};

const isEven = a => {
  if (a % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

const isSquare = a => {
  if (Math.sqrt(a) % 1 === 0) {
    return true;
  } else {
    return false;
  }
};

const startsWith = (char, string) => {
  if (char === string.charAt(0)) {
    return true;
  } else {
    return false;
  }
};

const containsVowels = string => {
  return string
    .split("")
    .some(letter => ["a", "e", "i", "o", "u"].includes(letter.toLowerCase()));
};

const isLowerCase = string => {
  if (string == string.toLowerCase()) {
    return true;
  } else {
    return false;
  }
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
