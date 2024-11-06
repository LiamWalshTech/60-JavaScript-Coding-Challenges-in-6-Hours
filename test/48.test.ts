import { expect, test } from "vitest";

const count = (string: string) => {
  const strAsArray = string.split('')
  const letterObjectCount = strAsArray.reduce((acc, letter) => {
    if (acc.hasOwnProperty(letter)) {
      acc[letter] = 1
    }

    acc[letter] = acc[letter] + 1
  }, {})

  return letterObjectCount
};

test("48. Count Characters in Your String", () => {
  expect(count("")).deep.eq({});
  expect(count("aba")).deep.eq({ a: 2, b: 1 });
});
