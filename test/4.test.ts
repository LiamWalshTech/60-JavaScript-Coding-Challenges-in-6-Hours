import { expect, test } from "vitest";

const greet = (name) => {
  //Your solution
};

test("4. Returning Strings", () => {
  expect(greet("Ryan")).eq("Hello, Ryan how are you doing today?");
  expect(greet("Sara")).eq("Hello, Sara how are you doing today?");
});
