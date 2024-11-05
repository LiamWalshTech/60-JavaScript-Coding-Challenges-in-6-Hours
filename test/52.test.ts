import { expect, test } from "vitest";

const firstNonRepeatingLetter = (str) => {
  // Your solution
};

test("52. First Non-repeating Character", () => {
  expect(firstNonRepeatingLetter("a")).eq("a");
  expect(firstNonRepeatingLetter("stress")).eq("t");
  expect(firstNonRepeatingLetter("sTreSS")).eq("T");
  expect(firstNonRepeatingLetter("abba")).eq("");
  expect(firstNonRepeatingLetter("Go hang a salami, I'm a lasagna hog!")).eq(
    ","
  );
});
