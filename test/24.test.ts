import { expect, test } from "vitest";

const findOutlier = (arr: Array<number>) => {
  const evenOrOdd = arr.map(num => num % 2 ? true : false)
  console.log(evenOrOdd)
  const oddOneOutIndex = evenOrOdd.reduce((prev, next, index) => {
    console.log(evenOrOdd[prev] !== next)
    return evenOrOdd[prev] !== next ? index : prev
  }, 0)

  return oddOneOutIndex
};

test("24. Find The Parity Outlier", () => {
  expect(findOutlier([0, 1, 2])).eq(1);
  expect(findOutlier([1, 2, 3])).eq(2);
  expect(findOutlier([1, 1, 0, 1, 1])).eq(0);
  expect(findOutlier([0, 0, 3, 0, 0])).eq(3);
  expect(findOutlier([160, 3, 1719, 19, 13, -21])).eq(160);
  expect(findOutlier([4, 0, 100, 4, 11, 2602, 36])).eq(11);
});
