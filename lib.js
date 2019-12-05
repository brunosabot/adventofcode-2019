import fs from "fs";

export const name = "library-1";

export const splitValues = (values, char = "\n") => values.split(char);

export const valueToInt = value => parseInt(value, 10);

export const sumReduce = (total, values) => total + values;

export const formatResult = value => `${value}`;

const getIntCodeCode = inputCode => {
  const [A, B, C, D, E] = `${inputCode}`.padStart(5, "0").split("");

  return [D + E, C, B, A].map(e => parseInt(e, 10));
};

const getValueOrRef = (results, digit, mode) => {
  if (mode === 0) {
    return results[digit];
  }
  return digit;
};

export const intcode = (inputResult, inputValue = 1) => {
  const result = [...inputResult];
  let output = "";
  let index = 0;

  while (result[index] !== 99 && result[index] !== undefined) {
    const [code, firstMode, secondMode] = getIntCodeCode(result[index]);
    const firstDigit = result[index + 1];
    const secondDigit = result[index + 2];
    const thirdDigit = result[index + 3];

    if (code === 1) {
      result[thirdDigit] =
        getValueOrRef(result, firstDigit, firstMode) +
        getValueOrRef(result, secondDigit, secondMode);
      index += 4;
    } else if (code === 2) {
      result[thirdDigit] =
        getValueOrRef(result, firstDigit, firstMode) *
        getValueOrRef(result, secondDigit, secondMode);
      index += 4;
    } else if (code === 3) {
      result[firstDigit] = inputValue;
      index += 2;
    } else if (code === 4) {
      output += getValueOrRef(result, firstDigit, firstMode);
      index += 2;
    } else if (code === 5) {
      // Opcode 5 is jump-if-true: if the first parameter is non-zero, it sets the instruction pointer to the value from the second parameter. Otherwise, it does nothing.
      if (getValueOrRef(result, firstDigit, firstMode) !== 0) {
        index = getValueOrRef(result, secondDigit, secondMode);
      } else {
        index += 3;
      }
    } else if (code === 6) {
      // Opcode 6 is jump-if-false: if the first parameter is zero, it sets the instruction pointer to the value from the second parameter. Otherwise, it does nothing.
      if (getValueOrRef(result, firstDigit, firstMode) === 0) {
        index = getValueOrRef(result, secondDigit, secondMode);
      } else {
        index += 3;
      }
    } else if (code === 7) {
      // Opcode 7 is less than: if the first parameter is less than the second parameter, it stores 1 in the position given by the third parameter. Otherwise, it stores 0.
      if (
        getValueOrRef(result, firstDigit, firstMode) <
        getValueOrRef(result, secondDigit, secondMode)
      ) {
        result[thirdDigit] = 1;
      } else {
        result[thirdDigit] = 0;
      }
      index += 4;
    } else if (code === 8) {
      // Opcode 8 is equals: if the first parameter is equal to the second parameter, it stores 1 in the position given by the third parameter. Otherwise, it stores 0.
      if (
        getValueOrRef(result, firstDigit, firstMode) ===
        getValueOrRef(result, secondDigit, secondMode)
      ) {
        result[thirdDigit] = 1;
      } else {
        result[thirdDigit] = 0;
      }
      index += 4;
    }
  }

  return [result, output];
};

export const intersect = (map1, map2) => {
  const keys2 = Object.keys(map2);
  const output = [];
  keys2.forEach(key => {
    if (map1[key] === true) {
      output.push(key);
    }
  });

  return output;
};

export const renderMapIntersect = (x1, y1, x2, y2, map1, map2) => {
  let string = "";
  for (let i = y1; i < y2; i += 1) {
    for (let j = x1; j < x2; j += 1) {
      if (i === 0 && j === 0) {
        string += "O";
      } else if (map1[`${j}:${i}`] === true && map2[`${j}:${i}`] === true) {
        string += "X";
      } else if (map1[`${j}:${i}`] === true || map2[`${j}:${i}`] === true) {
        string += "+";
      } else {
        string += ".";
      }
    }
    string += "\n";
  }

  fs.writeFile("./test.txt", string, (a, b) => console.log(a, b));

  // eslint-disable-next-line no-console
  // console.log(string);
};

const move = (getKey, getFinalCoord) => (map, distance, currentX, currentY, targetX, targetY) => {
  let d = 0;
  let done = false;

  for (let i = 1; i <= distance; i += 1) {
    const newCoords = getKey(currentX, currentY, i);

    map[newCoords.join(":")] = true;

    if (newCoords[0] === targetX && newCoords[1] === targetY) {
      done = true;
      d += 1;
    } else if (done === false) {
      d += 1;
    }
  }

  return [map, ...getFinalCoord(currentX, currentY, distance), d, done];
};

export const moveMap = {
  U: move(
    (currentX, currentY, i) => [currentX, currentY - i],
    (currentX, currentY, distance) => [currentX, currentY - distance]
  ),
  R: move(
    (currentX, currentY, i) => [currentX + i, currentY],
    (currentX, currentY, distance) => [currentX + distance, currentY]
  ),
  D: move(
    (currentX, currentY, i) => [currentX, currentY + i],
    (currentX, currentY, distance) => [currentX, currentY + distance]
  ),
  L: move(
    (currentX, currentY, i) => [currentX - i, currentY],
    (currentX, currentY, distance) => [currentX - distance, currentY]
  )
};

export const isNeverDecrease = digits => {
  return digits.every((digit, i) => digits[i + 1] === undefined || digit <= digits[i + 1]);
};
