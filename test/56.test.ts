import { expect, test } from "vitest";

const getConcatenation = (nums) => {
  // Your solution
};

test("56. Concatenation of Array", () => {
  expect(getConcatenation([1, 2, 3])).eq([1, 2, 3, 1, 2, 3]);
  expect(getConcatenation([4, 3, 2, 1])).eq([4, 3, 2, 1, 4, 3, 2, 1]);
});
