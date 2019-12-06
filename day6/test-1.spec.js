import fs from "fs";
import { main } from "./part-1.js";

describe("Day 4", () => {
  describe("Test isPasswordMatch", () => {
    it("Sample", () => {
      expect(main("COM)B\nB)C\nC)D\nD)E\nE)F\nB)G\nG)H\nD)I\nE)J\nJ)K\nK)L")).toBe(42);
    });

    it("Result", () => {
      const inputBuffer = fs.readFileSync(`./day6/input-1.txt`);
      expect(main(inputBuffer.toString().trim())).toBe(171213);
    });
  });
});
