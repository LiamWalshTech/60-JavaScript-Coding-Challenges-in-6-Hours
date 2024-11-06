import { expect, test } from "vitest";

const uniqueInOrder = (iterable: Array<number> | string) => {
  let newIterable: Array<number> | Array<string> = iterable

  if (typeof newIterable === 'string') {
    newIterable = newIterable.split('')
  }

  return newIterable.reduce((acc, curr, index) => {
    if (index === 0) {
      return acc
    }

    console.log(acc[index - 1])

    return acc[index - 1] == curr ? acc : [...acc, curr]
  }, [])
};

test("37. Unique In Order", () => {
  expect(uniqueInOrder([1, 2, 2, 3, 3])).eq([1, 2, 3]);
  expect(uniqueInOrder("ABBCcAD")).eq(["A", "B", "C", "c", "A", "D"]);
  expect(uniqueInOrder("AAAABBBCCDAABBB")).eq(["A", "B", "C", "D", "A", "B"]);
});
