import { intersect, moveMap, splitValues } from "../lib.js";

export default true;

const makeMapTo = (fullWire, targetX, targetY) => {
  let currentX = 0;
  let currentY = 0;
  let map = {};
  let runningDistance = 0;
  let done = false;

  fullWire.forEach(wire => {
    if (done === false) {
      const direction = wire.slice(0, 1);
      const distance = parseInt(wire.slice(1), 10);
      let wireDistance;

      const output = moveMap[direction](map, distance, currentX, currentY, targetX, targetY);
      [map, currentX, currentY, wireDistance, done] = output;

      runningDistance += wireDistance;
    }
  });

  return [map, runningDistance];
};

export const crossNearCenter = ([firstWire, secondWire]) => {
  const [map1] = makeMapTo(firstWire);
  const [map2] = makeMapTo(secondWire);

  const intersection = intersect(map1, map2);

  return intersection.reduce((acc, val) => {
    const coords = val.split(":");

    const [, distance1] = makeMapTo(firstWire, parseInt(coords[0], 10), parseInt(coords[1], 10));
    const [, distance2] = makeMapTo(secondWire, parseInt(coords[0], 10), parseInt(coords[1], 10));

    return Math.min(acc, distance1 + distance2);
  }, Infinity);
};

export const main = input => {
  const inputArray = splitValues(input, "\n").map(e => splitValues(e, ","));
  const result = crossNearCenter(inputArray);

  return result;
};
