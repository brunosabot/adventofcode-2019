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

  const stepsYou = [];
  const stepsSan = [];

  let current = "YOU";
  while (current) {
    current = map[current];
    stepsYou.push(current);
  }

  current = "SAN";
  while (current) {
    current = map[current];
    stepsSan.push(current);
  }

  const steps = [
    ...stepsYou.filter(step => stepsSan.indexOf(step) === -1),
    ...stepsSan.filter(step => stepsYou.indexOf(step) === -1)
  ];

  // console.log(stepsYou, stepsSan);

  return steps.length - 2;
};
