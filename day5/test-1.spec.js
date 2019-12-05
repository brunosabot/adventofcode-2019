import fs from "fs";
import { main } from "./part-1.js";

describe("Day 4", () => {
  describe("Test isPasswordMatch", () => {
    it("Result", () => {
      const inputBuffer = fs.readFileSync(`./day5/input-1.txt`);
      expect(main(inputBuffer.toString())).toBe("16348437");
    });
  });
});
