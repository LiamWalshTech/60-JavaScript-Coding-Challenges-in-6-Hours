import { expect, test } from "vitest";

const squareDigits = (num) => {
  // Your solution
};

test("14. Square Every Digit", () => {
  expect(squareDigits(2112)).eq(4114);
  expect(squareDigits(3212)).eq(9414);
  expect(squareDigits(9159)).eq(8112581);
});
