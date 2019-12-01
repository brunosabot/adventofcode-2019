import fs from "fs";
import { forEachLine, main } from "./part-2.js";

describe("Day 1", () => {
  describe("Test global", () => {
    it("Sample", () => {
      expect(main("12\n14\n1969\n100756")).resolves.toBe("51316");
    });
    it("Result", () => {
      const inputBuffer = fs.readFileSync(`./day1/input-1.txt`);
      expect(main(inputBuffer.toString())).resolves.toBe("4916076");
    });
  });

  describe("Each line", () => {
    it("Sample 1", () => {
      expect(forEachLine(12)).toBe(2);
    });
    it("Sample 2", () => {
      expect(forEachLine(14)).toBe(2);
    });
    it("Sample 3", () => {
      expect(forEachLine(1969)).toBe(966);
    });
    it("Sample 4", () => {
      expect(forEachLine(100756)).toBe(50346);
    });
  });
});
