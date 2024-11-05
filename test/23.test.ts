import { expect, test } from "vitest";

const positiveSum = (arr) => {
  // Your solution
};

test("23. Sum of Positives", () => {
  expect(positiveSum([1, 2, 3, 4, 5])).eq(15);
  expect(positiveSum([1, -2, 3, 4, 5])).eq(13);
  expect(positiveSum([-1, 2, 3, 4, -5])).eq(9);
  expect(positiveSum([-1, -2, -3, -4, -5])).eq(0);
  expect(positiveSum([])).eq(0);
});
