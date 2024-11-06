import { expect, test } from "vitest";

const accum = (str: string) => {
  const strAsArray = str.toLocaleLowerCase().split('')

  const strsAlphabetized = strAsArray.map((letter, index) => {
    const arrayLengthOfPosition = [
      ...Array(index).keys()
    ]
    const xOfLetter = arrayLengthOfPosition.map(() => letter)

    return `${letter.toUpperCase()}${xOfLetter.join('')}`
  })

  return strsAlphabetized.join('-')
};

test("18. Mumbling", () => {
  expect(accum("abcd")).eq("A-Bb-Ccc-Dddd");
  expect(accum("cwAt")).eq("C-Ww-Aaa-Tttt");
  expect(accum("RqaEzty")).eq("R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy");
});
