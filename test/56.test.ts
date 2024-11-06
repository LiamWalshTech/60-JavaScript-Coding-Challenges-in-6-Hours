import { expect, test } from "vitest";

const getConcatenation = (nums: Array<number>) => {
  return [...nums, ...nums]
};

test("56. Concatenation of Array", () => {
  expect(getConcatenation([1, 2, 3])).deep.eq([1, 2, 3, 1, 2, 3]);
  expect(getConcatenation([4, 3, 2, 1])).deep.eq([4, 3, 2, 1, 4, 3, 2, 1]);
});
