import { intcode } from "./lib.js";

describe("Lib", () => {
  describe("Test intcode", () => {
    it("Test OPCODE 1", () => {
      expect(intcode([1, 2, 3, 0, 99])).toEqual([[3, 2, 3, 0, 99], ""]);
      expect(intcode([1101, 2, 3, 0, 99])).toEqual([[5, 2, 3, 0, 99], ""]);
    });
    it("Test OPCODE 2", () => {
      expect(intcode([2, 2, 3, 0, 99])).toEqual([[0, 2, 3, 0, 99], ""]);
      expect(intcode([1102, 2, 3, 0, 99])).toEqual([[6, 2, 3, 0, 99], ""]);
    });
    it("Test OPCODE 3", () => {
      expect(intcode([3, 0, 3, 1, 99], 2)).toEqual([[2, 2, 3, 1, 99], ""]);
    });
    it("Test OPCODE 4", () => {
      expect(intcode([4, 0, 4, 1, 99], 2)).toEqual([[4, 0, 4, 1, 99], "40"]);
    });

    it("Sample", () => {
      expect(intcode([3, 0, 4, 0, 99], 1)[1]).toEqual("1");
      expect(intcode([1002, 4, 3, 4, 33], 1)[1]).toEqual("");
      expect(intcode([1101, 100, -1, 4, 0], 1)[1]).toEqual("");
    });

    fit("Sample part 2", () => {
      expect(intcode([3, 9, 8, 9, 10, 9, 4, 9, 99, -1, 8], 8)[1]).toEqual("1");
      expect(intcode([3, 9, 8, 9, 10, 9, 4, 9, 99, -1, 8], 9)[1]).toEqual("0");

      expect(intcode([3, 9, 7, 9, 10, 9, 4, 9, 99, -1, 8], 7)[1]).toEqual("1");
      expect(intcode([3, 9, 7, 9, 10, 9, 4, 9, 99, -1, 8], 8)[1]).toEqual("0");

      expect(intcode([3, 3, 1108, -1, 8, 3, 4, 3, 99], 8)[1]).toEqual("1");
      expect(intcode([3, 3, 1108, -1, 8, 3, 4, 3, 99], 9)[1]).toEqual("0");

      expect(intcode([3, 3, 1107, -1, 8, 3, 4, 3, 99], 7)[1]).toEqual("1");
      expect(intcode([3, 3, 1107, -1, 8, 3, 4, 3, 99], 8)[1]).toEqual("0");

      expect(intcode([3, 12, 6, 12, 15, 1, 13, 14, 13, 4, 13, 99, -1, 0, 1, 9], 0)[1]).toBe("0");
      expect(intcode([3, 12, 6, 12, 15, 1, 13, 14, 13, 4, 13, 99, -1, 0, 1, 9], 1)[1]).toBe("1");

      expect(intcode([3, 3, 1105, -1, 9, 1101, 0, 0, 12, 4, 12, 99, 1], 0)[1]).toBe("0");
      expect(intcode([3, 3, 1105, -1, 9, 1101, 0, 0, 12, 4, 12, 99, 1], 1)[1]).toBe("1");

      expect(
        intcode(
          [
            3,
            21,
            1008,
            21,
            8,
            20,
            1005,
            20,
            22,
            107,
            8,
            21,
            20,
            1006,
            20,
            31,
            1106,
            0,
            36,
            98,
            0,
            0,
            1002,
            21,
            125,
            20,
            4,
            20,
            1105,
            1,
            46,
            104,
            999,
            1105,
            1,
            46,
            1101,
            1000,
            1,
            20,
            4,
            20,
            1105,
            1,
            46,
            98,
            99
          ],
          7
        )[1]
      ).toBe("999");

      expect(
        intcode(
          [
            3,
            21,
            1008,
            21,
            8,
            20,
            1005,
            20,
            22,
            107,
            8,
            21,
            20,
            1006,
            20,
            31,
            1106,
            0,
            36,
            98,
            0,
            0,
            1002,
            21,
            125,
            20,
            4,
            20,
            1105,
            1,
            46,
            104,
            999,
            1105,
            1,
            46,
            1101,
            1000,
            1,
            20,
            4,
            20,
            1105,
            1,
            46,
            98,
            99
          ],
          8
        )[1]
      ).toBe("1000");

      expect(
        intcode(
          [
            3,
            21,
            1008,
            21,
            8,
            20,
            1005,
            20,
            22,
            107,
            8,
            21,
            20,
            1006,
            20,
            31,
            1106,
            0,
            36,
            98,
            0,
            0,
            1002,
            21,
            125,
            20,
            4,
            20,
            1105,
            1,
            46,
            104,
            999,
            1105,
            1,
            46,
            1101,
            1000,
            1,
            20,
            4,
            20,
            1105,
            1,
            46,
            98,
            99
          ],
          9
        )[1]
      ).toBe("1001");
    });
  });
});
