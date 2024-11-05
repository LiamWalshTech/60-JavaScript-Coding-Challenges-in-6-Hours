import { expect, test } from "vitest";

const arrayDiff = (a, b) => {
  // Your solution
};

test("25. Array.diff", () => {
  expect(arrayDiff([1, 8, 2], [])).eq([1, 8, 2]);
  expect(arrayDiff([1, 2, 3], [1, 2])).eq([3]);
  expect(arrayDiff([3, 4], [3])).eq([4]);
  expect(arrayDiff([], [4, 5])).eq([]);
});
