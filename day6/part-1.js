import { splitValues } from "../lib.js";

export default true;

export const main = input => {
  const inputArray = splitValues(input, "\n");
  const map = inputArray.reduce((acc, val) => {
    const association = val.split(")");
    const current = acc[association[1]] || [];

    return {
      ...acc,
      [association[1]]: [...current, association[0]]
    };
  }, {});

  let count = 0;

  Object.keys(map).forEach(orbitObject => {
    let current = orbitObject;
    while (current) {
      current = map[current];

      if (current) {
        count += 1;
      }
    }
  });

  return count;
};
