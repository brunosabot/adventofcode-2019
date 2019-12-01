export const name = "library-1";

export const splitValues = values => values.split("\n");

export const valueToInt = value => parseInt(value, 10);

export const sumReduce = (total, values) => total + values;

export const formatResult = value => `${value}`;
