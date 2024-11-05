import { expect, test } from "vitest";

const countBits = (n) => {
  // Your solution
};

test("21. Bit Counting", () => {
  expect(countBits(0)).eq(0);
  expect(countBits(4)).eq(1);
  expect(countBits(7)).eq(3);
  expect(countBits(9)).eq(2);
});
