import fs from "fs";
import { intcode, valueToInt } from "../lib.js";
import { main } from "./part-1.js";

describe("Day 2", () => {
  describe("Test intCode", () => {
    it("Sample 0", () => {
      expect(
        intcode("1,9,10,3,2,3,11,0,99,30,40,50".split(",").map(valueToInt))
      ).toEqual("3500,9,10,70,2,3,11,0,99,30,40,50".split(",").map(valueToInt));
    });
    it("Sample 1", () => {
      expect(intcode("1,0,0,0,99".split(",").map(valueToInt))).toEqual(
        "2,0,0,0,99".split(",").map(valueToInt)
      );
    });
    it("Sample 2", () => {
      expect(intcode("2,3,0,3,99".split(",").map(valueToInt))).toEqual(
        "2,3,0,6,99".split(",").map(valueToInt)
      );
    });
    it("Sample 3", () => {
      expect(intcode("2,4,4,5,99,0".split(",").map(valueToInt))).toEqual(
        "2,4,4,5,99,9801".split(",").map(valueToInt)
      );
    });
    it("Sample 4", () => {
      expect(intcode("30,1,1,4,2,5,6,0,99".split(",").map(valueToInt))).toEqual(
        "30,1,1,4,2,5,6,0,99".split(",").map(valueToInt)
      );
    });
    it("Result", () => {
      const inputBuffer = fs.readFileSync(`./day2/input-1.txt`);
      expect(main(inputBuffer.toString())).resolves.toBe("3765464");
    });
  });
});
