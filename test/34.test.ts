import { expect, test } from "vitest";

const fib = (steps) => {
  // Your solution
};

test("34. Fibonacci Number", () => {
  expect(fib(0)).eq(0);
  expect(fib(4)).eq(3);
  expect(fib(17)).eq(1597);
  expect(fib(20)).eq(6765);
});
