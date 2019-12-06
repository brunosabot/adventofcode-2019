import fs from "fs";
import { main } from "./part-2.js";

describe("Day 4", () => {
  describe("Test isPasswordMatch", () => {
    it("Sample", () => {
      expect(main("COM)B\nB)C\nC)D\nD)E\nE)F\nB)G\nG)H\nD)I\nE)J\nJ)K\nK)L\nK)YOU\nI)SAN")).toBe(4);
    });

    it("Result", () => {
      const inputBuffer = fs.readFileSync(`./day6/input-2.txt`);
      expect(main(inputBuffer.toString().trim())).toBe(292);
    });
  });
});
