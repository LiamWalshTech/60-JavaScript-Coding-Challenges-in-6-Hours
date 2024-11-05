import { expect, test } from "vitest";

const getMiddle = (str) => {
  // Your solution
};

test("11. Get the Middle Character", () => {
  expect(getMiddle("test")).eq("es");
  expect(getMiddle("testing")).eq("t");
  expect(getMiddle("middle")).eq("dd");
  expect(getMiddle("A")).eq("A");
});
