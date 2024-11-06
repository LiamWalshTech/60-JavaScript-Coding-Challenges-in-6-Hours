import { expect, test } from "vitest";

const arrayDiff = (a: Array<number>, b: Array<number>) => {
  const arrayDiff = a.filter(aNum => {
    const foundInB = Boolean(b.find((bNum) => bNum === aNum))


    return !foundInB 
  })

  return arrayDiff
};

test("25. Array.diff", () => {
  expect(arrayDiff([1, 8, 2], [])).deep.equal([1, 8, 2]);
  expect(arrayDiff([1, 2, 3], [1, 2])).deep.equal([3]);
  expect(arrayDiff([3, 4], [3])).deep.equal([4]);
  expect(arrayDiff([], [4, 5])).deep.equal([]);
});
