import { expect, test } from "vitest";

const twoSum = (nums, target) => {
  // Your solution
};

test("36. Two Sum", () => {
  expect(twoSum([2, 7, 11, 15], 9)).eq([0, 1]);
  expect(twoSum([3, 2, 4], 6)).eq([1, 2]);
});
