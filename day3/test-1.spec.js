import fs from "fs";
import { main } from "./part-1.js";

describe("Day 2", () => {
  describe("Test intCode", () => {
    it("Sample 0", () => {
      expect(main("R8,U5,L5,D3\nU7,R6,D4,L4")).toEqual(6);
    });
    it("Sample 1", () => {
      expect(main("R75,D30,R83,U83,L12,D49,R71,U7,L72\nU62,R66,U55,R34,D71,R55,D58,R83")).toEqual(
        159
      );
    });
    it("Sample 2", () => {
      expect(
        main("R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51\nU98,R91,D20,R16,D67,R40,U7,R15,U6,R7")
      ).toEqual(135);
    });
    it("Result", () => {
      const inputBuffer = fs.readFileSync(`./day3/input-1.txt`);
      expect(main(inputBuffer.toString())).toBe(4981);
    });
  });
});
