import { expect, test } from "vitest";

const isDivisible = (n, x, y) => {
  // Your solution
};

test("7. Is n Divisible by x and y?", () => {
  expect(isDivisible(3, 3, 4)).eq(false);
  expect(isDivisible(12, 3, 4)).eq(true);
  expect(isDivisible(8, 3, 4)).eq(false);
  expect(isDivisible(48, 3, 4)).eq(true);
});
