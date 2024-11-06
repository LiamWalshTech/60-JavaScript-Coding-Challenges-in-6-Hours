import { expect, test } from "vitest";

const isSquare = (n: number) => {
  if (n === 0) {
    return true
  }

  const squareRoot = Math.sqrt(n)

  return squareRoot % 1 === 0 ? true: false
};

test("15. You're a Square!", () => {
  expect(isSquare(0)).eq(true);
  expect(isSquare(4)).eq(true);
  expect(isSquare(25)).eq(true);
  expect(isSquare(3)).eq(false);
  expect(isSquare(93)).eq(false);
  expect(isSquare(-1)).eq(false);
});
