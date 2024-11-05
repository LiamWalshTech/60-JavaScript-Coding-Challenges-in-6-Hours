import { expect, test } from "vitest";

const kidsWithCandies = (candies, extraCandies) => {
  // Your solution
};

test("43. Kids With the Greatest Number of Candies", () => {
  expect(kidsWithCandies([12, 1, 12], 10)).eq([true, false, true]);
  expect(kidsWithCandies([4, 2, 1, 1, 2], 1)).eq([
    true,
    false,
    false,
    false,
    false,
  ]);
});
