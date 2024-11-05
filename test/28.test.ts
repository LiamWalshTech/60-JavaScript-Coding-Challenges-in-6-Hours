import { expect, test } from "vitest";

const isIsogram = (str) => {
  // Your solution
};

test("28. Isograms", () => {
  expect(isIsogram("Dermatoglyphics")).eq(true);
  expect(isIsogram("isIsogram")).eq(false);
  expect(isIsogram("isogram")).eq(true);
  expect(isIsogram("moOse")).eq(false);
  expect(isIsogram("aba")).eq(false);
  expect(isIsogram("")).eq(true);
});
