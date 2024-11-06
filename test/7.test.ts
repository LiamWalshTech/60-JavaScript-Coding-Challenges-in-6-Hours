import { expect, test } from "vitest";

const isDivisible = (n: number, x: number, y: number) => {
  const divisibleByX = n % x === 0 ? true : false
  const divisibleByY = n % y === 0 ? true : false

  return divisibleByX && divisibleByY
};

test("7. Is n Divisible by x and y?", () => {
  expect(isDivisible(3, 3, 4)).eq(false);
  expect(isDivisible(12, 3, 4)).eq(true);
  expect(isDivisible(8, 3, 4)).eq(false);
  expect(isDivisible(48, 3, 4)).eq(true);
});
