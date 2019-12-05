import { formatResult, splitValues, valueToInt, intcode } from "../lib.js";

export default true;

export const main = async input => {
  const inputArray = splitValues(input, ",").map(valueToInt);

  for (let i = 0; i <= 99; i += 1) {
    for (let j = 0; j <= 99; j += 1) {
      inputArray[1] = i;
      inputArray[2] = j;
      const [result] = intcode(inputArray);

      if (result[0] === 19690720) {
        return formatResult(100 * i + j);
      }
    }
  }

  return "err";
};
