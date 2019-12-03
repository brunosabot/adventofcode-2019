import { intersect, moveMap, splitValues } from "../lib.js";

export default true;

const makeMap = fullWire => {
  let currentX = 0;
  let currentY = 0;
  let map = {};

  fullWire.forEach(wire => {
    const direction = wire.slice(0, 1);
    const distance = parseInt(wire.slice(1), 10);

    const output = moveMap[direction](map, distance, currentX, currentY);
    [map, currentX, currentY] = output;
  });

  return [map];
};

export const crossNearCenter = ([firstWire, secondWire]) => {
  const [map1] = makeMap(firstWire);
  const [map2] = makeMap(secondWire);

  const intersection = intersect(map1, map2);
  // renderMapIntersect(10, 10, map1, map2);

  const smallestManhattan = intersection.reduce((acc, val) => {
    const split = val.split(":");
    return Math.min(acc, Math.abs(split[0]) + Math.abs(split[1]));
  }, Infinity);

  return smallestManhattan;
};

export const main = input => {
  const inputArray = splitValues(input, "\n").map(e => splitValues(e, ","));
  const result = crossNearCenter(inputArray);

  return result;
};
