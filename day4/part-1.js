import { isNeverDecrease } from "../lib.js";

export const hasAdjacentDouble = digits => {
  return digits.some((digit, i) => digit === digits[i + 1]);
};

export const isPasswordMatch = value => {
  const splitted = value.split("");

  if (!hasAdjacentDouble(splitted)) {
    return false;
  }

  if (!isNeverDecrease(splitted)) {
    return false;
  }

  return true;
};

export const main = input => {
  const [lowest, highest] = input.split("-").map(i => parseInt(i, 10));

  let counter = 0;
  for (let i = lowest; i < highest; i += 1) {
    if (isPasswordMatch(`${i}`)) {
      counter += 1;
    }
  }

  return counter;
};
