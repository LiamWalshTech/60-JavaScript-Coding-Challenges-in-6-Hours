import { expect, test } from "vitest";

const reverseString = (str) => {
  // Your solution
};

test("32. Reversed Strings", () => {
  expect(reverseString("hello")).eq("olleh");
  expect(reverseString("world")).eq("dlrow");
  expect(reverseString("")).eq("");
  expect(reverseString("h")).eq("h");
});
