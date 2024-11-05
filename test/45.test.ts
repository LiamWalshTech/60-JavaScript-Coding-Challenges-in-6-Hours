import { expect, test } from "vitest";

const maximumWealth = (accounts) => {
  // Your solution
};

test("45. Richest Customer Wealth", () => {
  expect(
    maximumWealth([
      [2, 8, 7],
      [7, 1, 3],
      [1, 9, 5],
    ])
  ).eq(17);
  expect(
    maximumWealth([
      [1, 5],
      [7, 3],
      [3, 5],
    ])
  ).eq(10);
  expect(
    maximumWealth([
      [1, 2, 3],
      [3, 2, 1],
    ])
  ).eq(6);
});
