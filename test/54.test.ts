import { expect, test } from "vitest";

const scramble = (str1, str2) => {
  // Your solution
};

test("54. Scramble", () => {
  expect(scramble("scriptjava", "javascript")).eq(true);
  expect(scramble("scriptingjava", "javascript")).eq(true);
  expect(scramble("scriptsjava", "javascripts")).eq(true);
  expect(scramble("jscripts", "javascript")).eq(false);
  expect(scramble("javscripts", "javascript")).eq(false);
});
