import { expect, test } from "vitest";

const scramble = (str1: string, str2: string) => {
  // loop through str1 and if you find a match in str2
  // remove the char from str2 and carry on
  // loop until the end
  // assess if str2 is empty or not
};

test("54. Scramble", () => {
  expect(scramble("scriptjava", "javascript")).eq(true);
  expect(scramble("scriptingjava", "javascript")).eq(true);
  expect(scramble("scriptsjava", "javascripts")).eq(true);
  expect(scramble("jscripts", "javascript")).eq(false);
  expect(scramble("javscripts", "javascript")).eq(false);
});
