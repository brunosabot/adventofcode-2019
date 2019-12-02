export const name = "library-1";

export const splitValues = (values, char = "\n") => values.split(char);

export const valueToInt = value => parseInt(value, 10);

export const sumReduce = (total, values) => total + values;

export const formatResult = value => `${value}`;

export const intcode = input => {
  const result = [...input];

  let index = 0;
  while (result[index] !== 99 && result[index] !== undefined) {
    const code = result[index];
    const firstDigit = result[result[index + 1]];
    const secondDigit = result[result[index + 2]];
    const whereToStore = result[index + 3];

    if (code === 1) {
      result[whereToStore] = firstDigit + secondDigit;
    } else if (code === 2) {
      result[whereToStore] = firstDigit * secondDigit;
    }

    index += 4;
  }

  return result;
};
