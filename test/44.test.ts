import { expect, test } from "vitest";

const rot13 = (str) => {
  // Your solution
};

test("44. Rot13", () => {
  expect(rot13("az AZ")).eq("nm NM");
  expect(rot13("10+2 is twelve.")).eq("10+2 vf gjryir.");
  expect(rot13("abcdefghijklmnopqrstuvwxyz")).eq("nopqrstuvwxyzabcdefghijklm");
});
