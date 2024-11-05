import { expect, test } from "vitest";

const duplicateCount = (text) => {
  // Your solution
};

test("30. Counting Duplicates", () => {
  expect(duplicateCount("")).eq(0);
  expect(duplicateCount("abcde")).eq(0);
  expect(duplicateCount("abA11")).eq(2);
  expect(duplicateCount("aabbcde")).eq(2);
  expect(duplicateCount("aabBcde")).eq(2);
  expect(duplicateCount("Indivisibility")).eq(1);
  expect(duplicateCount("Indivisibilities")).eq(2);
});
