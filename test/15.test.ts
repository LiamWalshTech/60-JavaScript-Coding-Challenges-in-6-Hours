import { expect, test } from "vitest";

const isSquare = (n) => {
  // Your solution
};

test("15. You're a Square!", () => {
  expect(isSquare(0)).eq(true);
  expect(isSquare(4)).eq(true);
  expect(isSquare(25)).eq(true);
  expect(isSquare(3)).eq(false);
  expect(isSquare(93)).eq(false);
  expect(isSquare(-1)).eq(false);
});
