import { expect, test } from "vitest";

const findOdd = (arr) => {
  // Your solution
};

test("10. Find the Odd Int", () => {
  expect(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])).eq(
    5
  );
  expect(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5])).eq(5);
  expect(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5])).eq(-1);
  expect(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10])).eq(1);
  expect(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1])).eq(10);
  expect(findOdd([10])).eq(10);
});
