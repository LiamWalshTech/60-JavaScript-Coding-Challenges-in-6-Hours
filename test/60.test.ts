import { expect, test } from "vitest";

const moveZeroes = (nums: Array<number>) => {
  return nums.sort((a, b) => b === 0 ? b - a : b)
};

test("60. Move Zeroes", () => {
  expect(moveZeroes([0, 1, 0, 3, 12])).deep.eq([1, 3, 12, 0, 0]);
  expect(moveZeroes([0, 0, 1])).deep.eq([1, 0, 0]);
  expect(moveZeroes([0])).deep.eq([0]);
});
