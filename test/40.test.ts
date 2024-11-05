import { expect, test } from "vitest";

const isValid = (s) => {
  // Your solution
};

test("40. Valid Parentheses", () => {
  expect(isValid("[")).eq(false);
  expect(isValid("()")).eq(true);
  expect(isValid("(]")).eq(false);
  expect(isValid("{[]}")).eq(true);
  expect(isValid("([)]")).eq(false);
  expect(isValid("()[]{}")).eq(true);
});
