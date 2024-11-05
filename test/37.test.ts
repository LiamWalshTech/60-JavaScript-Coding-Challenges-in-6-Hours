import { expect, test } from "vitest";

const uniqueInOrder = (iterable) => {
  // Your solution
};

test("37. Unique In Order", () => {
  expect(uniqueInOrder([1, 2, 2, 3, 3])).eq([1, 2, 3]);
  expect(uniqueInOrder("ABBCcAD")).eq(["A", "B", "C", "c", "A", "D"]);
  expect(uniqueInOrder("AAAABBBCCDAABBB")).eq(["A", "B", "C", "D", "A", "B"]);
});
