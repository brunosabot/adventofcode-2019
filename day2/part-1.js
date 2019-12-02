import { formatResult, splitValues, valueToInt, intcode } from "../lib.js";

export default true;

export const main = async input => {
  const inputArray = splitValues(input, ",").map(valueToInt);
  inputArray[1] = 12;
  inputArray[2] = 2;
  const result = intcode(inputArray);

  return formatResult(result[0]);
};
