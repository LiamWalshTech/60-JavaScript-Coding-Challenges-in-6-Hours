import { expect, test } from "vitest";

const kidsWithCandies = (candies: Array<number>, extraCandies: number) => {
  // loop through and give each child the extra candies
  // establish what the most candies is originally
  // establish a min max for each child
  // compare from there
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
