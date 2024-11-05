import { expect, test } from "vitest";

const XO = (str) => {
  // Your solution
};

test("22. Exes and Ohs", () => {
  expect(XO("xo")).eq(true);
  expect(XO("Oo")).eq(false);
  expect(XO("xxOo")).eq(true);
  expect(XO("xxxm")).eq(false);
  expect(XO("ooom")).eq(false);
  expect(XO("ty")).eq(true);
});
