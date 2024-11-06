import { expect, test } from "vitest";

String.prototype.capitalize = function () {
  const thisAsArray = this.split(' ')
  const capatlizedWords = thisAsArray.map(word => {
    const firstLetter = word.slice(0, 1).toUpperCase()
    const restOfLetters = word.slice(1, word.length)

    return `${firstLetter}${restOfLetters}` 
  })

  return capatlizedWords.join(' ')
};

test("26. Capitalize Words", () => {
  var str = "How can mirrors be real if our eyes aren't real";
  expect(str.capitalize()).eq(
    "How Can Mirrors Be Real If Our Eyes Aren't Real"
  );
});
