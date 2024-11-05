import { expect, test } from "vitest";

const solution = (str) => {
  // Your solution
};

test("49. Break camelCase", () => {
  expect(solution("camelCasingHere")).eq("camel Casing Here");
  expect(solution("No Camels here")).eq("No Camels here");
  expect(solution("ABC")).eq("ABC");
  expect(solution("")).eq("");
});
