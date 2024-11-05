import { expect, test } from "vitest";

const generateHashtag = (str) => {
  // Your solution
};

test("46. The Hashtag Generator", () => {
  expect(generateHashtag("JavaScript")).eq("#JavaScript");
  expect(generateHashtag("Do we have a Hashtag")).eq("#DoWeHaveAHashtag");
  expect(generateHashtag("    Hello     World   ")).eq("#HelloWorld");
  expect(generateHashtag("coding" + " ".repeat(140) + "for life")).eq(
    "#CodingForLife"
  );
  expect(generateHashtag("")).eq(false);
  expect(generateHashtag(" ")).eq(false);
  expect(generateHashtag("a".repeat(140))).eq(false);
  expect(generateHashtag(" ".repeat(200))).eq(false);
});
