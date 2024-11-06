import { expect, test } from "vitest";

const greet = (name) => {
  return `Hello, ${name} how are you doing today?`
};

test("4. Returning Strings", () => {
  expect(greet("Ryan")).eq("Hello, Ryan how are you doing today?");
  expect(greet("Sara")).eq("Hello, Sara how are you doing today?");
});
