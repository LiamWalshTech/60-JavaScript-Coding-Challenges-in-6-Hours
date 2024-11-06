import { expect, test } from "vitest";

const removeDuplicates = (nums: Array<number>) => {
  return Object.keys(nums).length
};

test("42. Remove Duplicates from Sorted Array", () => {
  expect(removeDuplicates([1, 1, 2])).eq(2);
  expect(removeDuplicates([0, 1, 1, 1, 2, 2, 3, 3, 4])).eq(5);
  expect(removeDuplicates([])).eq(0);
});
