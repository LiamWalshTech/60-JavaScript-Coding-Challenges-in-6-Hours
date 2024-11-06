import { expect, test } from "vitest";

const reverse = (x: number) => {
  const digitsReversed = x.toString().split('').reverse().join('')
  console.log(digitsReversed)

  return Number(digitsReversed)
};

test("41. Reverse Integer", () => {
  expect(reverse(0)).eq(0);
  expect(reverse(120)).eq(21);
  expect(reverse(123)).eq(321);
  expect(reverse(-123)).eq(-321);
  expect(reverse(1534236469)).eq(0);
});
