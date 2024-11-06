import { expect, test } from "vitest";

const isIsogram = (str: string) => {
  const strAsArray = str.split('')
  const letterObjectCount = strAsArray.reduce((acc, letter) => {
    if (acc.hasOwnProperty(letter)) {
      acc[letter] = 1
      
    }

    acc[letter] = acc[letter] + 1
  }, {})

  console.log(letterObjectCount)
};

test("28. Isograms", () => {
  expect(isIsogram("Dermatoglyphics")).eq(true);
  expect(isIsogram("isIsogram")).eq(false);
  expect(isIsogram("isogram")).eq(true);
  expect(isIsogram("moOse")).eq(false);
  expect(isIsogram("aba")).eq(false);
  expect(isIsogram("")).eq(true);
});
