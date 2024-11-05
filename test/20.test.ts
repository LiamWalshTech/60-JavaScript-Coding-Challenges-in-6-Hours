import { expect, test } from "vitest";

const findShort = (str) => {
  // Your solution
};

test("20. Shortest Word", () => {
  expect(findShort("Test where final word shortest see")).eq(3);
  expect(findShort("Lets all go on holiday somewhere very cold")).eq(2);
  expect(findShort("i want to travel the world writing code one day")).eq(1);
});
