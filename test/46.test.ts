import { expect, test } from "vitest";

const generateHashtag = (str: string) => {
  console.log(str, str.length)
  if (str.trim().length < 0) {
    return false
  } else {
    const strAsArray = str.split(' ').map(word => {
      return `${word.slice(0, 1).toUpperCase()}${word.slice(1, word.length)}`
    })
    const hashTagStr = `#${strAsArray.join('')}`
  
    return hashTagStr.length < 140 ? hashTagStr : false
  }
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
