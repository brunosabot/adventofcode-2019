import fs from "fs";
import { intcode } from "../lib.js";

describe("Day 2", () => {
  describe("Test intCode", () => {
    xit("Result", () => {
      const inputBuffer = fs.readFileSync(`./day2/input-1.txt`);
      expect(intcode(inputBuffer.toString())).resolves.toBe("3765464");
    });
  });
});
