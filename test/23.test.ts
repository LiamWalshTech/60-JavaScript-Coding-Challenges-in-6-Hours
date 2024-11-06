import { expect, test } from "vitest";

const positiveSum = (arr: Array<number>) => {
  if (arr.length < 0 ) {
    return 0
  }

  return arr.reduce((acc, num) => {
    return num > 0 ? num + acc : acc
  }, 0)
}

test("23. Sum of Positives", () => {
  // expect(positiveSum([1, 2, 3, 4, 5])).eq(15);
  // expect(positiveSum([1, -2, 3, 4, 5])).eq(13);
  expect(positiveSum([-1, 2, 3, 4, -5])).eq(9);
  expect(positiveSum([-1, -2, -3, -4, -5])).eq(0);
  expect(positiveSum([])).eq(0);
});
