import { expect, test } from "vitest";

const maxProfit = (prices) => {
  // Your solution
};

test("38. Best Time to Buy and Sell Stock", () => {
  expect(maxProfit([7, 1, 5, 3, 6, 4])).eq(5);
  expect(maxProfit([7, 6, 4, 3, 1])).eq(0);
});
