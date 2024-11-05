import { expect, test } from "vitest";

const highAndLow = (numbers) => {
  // Your solution
};

test("16. Highest and Lowest", () => {
  expect(highAndLow("1 2 3 4 5")).eq("5 1");
  expect(highAndLow("1 2 -3 4 5")).eq("5 -3");
  expect(highAndLow("1 9 3 4 -5")).eq("9 -5");
  expect(highAndLow("0 -214 542")).eq("542 -214");
});
