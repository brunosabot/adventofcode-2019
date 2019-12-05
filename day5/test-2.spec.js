import fs from "fs";
import { main } from "./part-2.js";

describe("Day 4", () => {
  describe("Test isPasswordMatch", () => {
    it("Result", () => {
      const inputBuffer = fs.readFileSync(`./day5/input-2.txt`);
      expect(main(inputBuffer.toString())).toBe("6959377");
    });
  });
});
