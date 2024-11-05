import { expect, test } from "vitest";

const cakes = (recipe, available) => {
  // Your solution
};

test("47. Pete, the Baker", () => {
  const recipe = { flour: 500, sugar: 200, eggs: 1 };
  const available = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };
  expect(cakes(recipe, available)).eq(2);

  const recipe2 = { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 };
  const available2 = { sugar: 500, flour: 2000, milk: 2000 };
  expect(cakes(recipe2, available2)).eq(0);
});
