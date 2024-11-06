import { expect, test } from "vitest";

const getCount = (str: string) => {
  const strOnlyVowels = str.replace(/[^aeiou.]/g, '')

  console.log(strOnlyVowels)

  return strOnlyVowels.length
};

test("8. Vowel Count", () => {
  expect(getCount("my pyx")).eq(0);
  expect(getCount("pear tree")).eq(4);
  expect(getCount("abracadabra")).eq(5);
  expect(getCount("o a kak ushakov lil vo kashu kakao")).eq(13);
});
