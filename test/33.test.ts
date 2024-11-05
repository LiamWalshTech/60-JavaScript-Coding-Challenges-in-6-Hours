import { expect, test } from "vitest";

const persistence = (num) => {
  // Your solution
};

test("33. Persistent Bugger", () => {
  expect(persistence(999)).eq(4);
  // because 9*9*9=729, 7*2*9=126, 1*2*6=12, and finally 1*2=2

  expect(persistence(93)).eq(3);
  // because 9*3=27, 2*7=14, 1*4=4 and 4 has only one digit

  expect(persistence(5)).eq(0);
  // because 5 is already a single-digit number
});
