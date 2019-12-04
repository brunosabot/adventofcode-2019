import fs from "fs";
import { isPasswordMatch, main } from "./part-2.js";

describe("Day 4", () => {
  describe("Test isPasswordMatch", () => {
    it("Sample 0", () => {
      expect(isPasswordMatch("112233")).toEqual(true);
    });
    it("Sample 1", () => {
      expect(isPasswordMatch("123444")).toEqual(false);
    });
    it("Sample 2", () => {
      expect(isPasswordMatch("111122")).toEqual(true);
    });
    xit("Result", () => {
      const inputBuffer = fs.readFileSync(`./day4/input-1.txt`);
      expect(main(inputBuffer.toString())).toBe(1660);
    });
  });
});
