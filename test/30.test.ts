import { expect, test } from "vitest";

const duplicateCount = (text: string) => {
  const textAsArray = text.split('')
  const letterObjectCount = textAsArray.reduce((prev, curr) => {
    const currKey = curr.toLocaleLowerCase()
    const prevValue = currKey in prev ? prev[currKey] : 0
    return {...prev, ...{
      [currKey]: prevValue + 1
    }}
  }, {})
  const numOfDuplicates = Object.values(letterObjectCount).reduce((prev, curr) => {
    return curr > 1 ? prev + 1 : prev
  }, 0)

  return numOfDuplicates
};

test("30. Counting Duplicates", () => {
  expect(duplicateCount("")).eq(0);
  expect(duplicateCount("abcde")).eq(0);
  expect(duplicateCount("abA11")).eq(2);
  expect(duplicateCount("aabbcde")).eq(2);
  expect(duplicateCount("aabBcde")).eq(2);
  expect(duplicateCount("Indivisibility")).eq(1);
  expect(duplicateCount("Indivisibilities")).eq(2);
});
