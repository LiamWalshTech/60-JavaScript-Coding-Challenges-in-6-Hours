import { expect, test } from "vitest";

const isValid = (s: string) => {
  // 
};

test("40. Valid Parentheses", () => {
  expect(isValid("[")).eq(false);
  expect(isValid("()")).eq(true);
  expect(isValid("(]")).eq(false);
  expect(isValid("{[]}")).eq(true);
  expect(isValid("([)]")).eq(false);
  expect(isValid("()[]{}")).eq(true);
});
