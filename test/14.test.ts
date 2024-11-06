import { expect, test } from "vitest";

const squareDigits = (num: number) => {
  const numsArray = num.toString().split('')

  const squaredNums = numsArray.map(num => Math.pow(Number(num), 2))

  return Number(squaredNums.join(''))
};

test("14. Square Every Digit", () => {
  expect(squareDigits(2112)).eq(4114);
  expect(squareDigits(3212)).eq(9414);
  expect(squareDigits(9159)).eq(8112581);
});
