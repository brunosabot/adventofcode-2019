import fs from "fs";
import { isPasswordMatch, main } from "./part-1.js";

describe("Day 4", () => {
  describe("Test isPasswordMatch", () => {
    it("Sample 0", () => {
      expect(isPasswordMatch("111111")).toEqual(true);
    });
    it("Sample 1", () => {
      expect(isPasswordMatch("223450")).toEqual(false);
    });
    it("Sample 2", () => {
      expect(isPasswordMatch("123789")).toEqual(false);
    });
    it("Result", () => {
      const inputBuffer = fs.readFileSync(`./day4/input-1.txt`);
      expect(main(inputBuffer.toString())).toBe(1660);
    });
  });
});
