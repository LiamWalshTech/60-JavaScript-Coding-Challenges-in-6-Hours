import { expect, test } from "vitest";

const moveZeroes = (nums) => {
  // Your solution
};

test("60. Move Zeroes", () => {
  expect(moveZeroes([0, 1, 0, 3, 12])).eq([1, 3, 12, 0, 0]);
  expect(moveZeroes([0, 0, 1])).eq([1, 0, 0]);
  expect(moveZeroes([0])).eq([0]);
});
