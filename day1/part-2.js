import { formatResult, splitValues, sumReduce, valueToInt } from "../lib.js";

export const forEachLine = value => {
  let total = Math.floor(value / 3) - 2;
  let localValue = total;

  while (localValue > 0) {
    localValue = Math.floor(localValue / 3) - 2;

    if (localValue > 0) {
      total += localValue;
    }
  }

  return total;
};

export const main = async input => {
  const result = splitValues(input)
    .map(valueToInt)
    .map(forEachLine)
    .reduce(sumReduce);

  return formatResult(result);
};
