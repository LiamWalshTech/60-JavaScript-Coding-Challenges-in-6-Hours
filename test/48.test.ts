import { expect, test } from "vitest";

const count = (string) => {
  // Your solution
};

test("48. Count Characters in Your String", () => {
  expect(count("")).eq({});
  expect(count("aba")).eq({ a: 2, b: 1 });
});
