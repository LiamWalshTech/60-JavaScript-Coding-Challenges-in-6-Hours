import { expect, test } from "vitest";

const century = (year) => {
  // Your solution
};

test("5. Century From Year", () => {
  expect(century(1705)).eq(18);
  expect(century(1900)).eq(19);
  expect(century(1601)).eq(17);
  expect(century(2000)).eq(20);
  expect(century(89)).eq(1);
});
