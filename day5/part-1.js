import { formatResult, splitValues, valueToInt, intcode } from "../lib.js";

export default true;

export const main = input => {
  const inputArray = splitValues(input, ",").map(valueToInt);
  const [result, output] = intcode(inputArray, 1);

  return formatResult(parseInt(output, 10));
};
