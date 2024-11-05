import { expect, test } from "vitest";

const even_or_odd = (number) => {
  // Your solution
};

test("2. Even or Odd", () => {
  expect(even_or_odd(0)).eq("Even");
  expect(even_or_odd(2)).eq("Even");
  expect(even_or_odd(3)).eq("Odd");
  expect(even_or_odd(-3)).eq("Odd");
});
