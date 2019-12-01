import { formatResult, splitValues, sumReduce, valueToInt } from "../lib.js";

export const forEachLine = value => Math.floor(value / 3) - 2;

export const main = async input => {
  const result = splitValues(input)
    .map(valueToInt)
    .map(forEachLine)
    .reduce(sumReduce);

  return formatResult(result);
};
