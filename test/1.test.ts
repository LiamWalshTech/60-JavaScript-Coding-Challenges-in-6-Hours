import { expect, test } from "vitest";

const solution = (number) => {
  // your solution
};

test("1. Multiples of 3 or 5", () => {
  expect(solution(0)).eq(0);
  expect(solution(-15)).eq(0);
  expect(solution(10)).eq(23);
  expect(solution(20)).eq(78);
  expect(solution(200)).eq(9168);
});
