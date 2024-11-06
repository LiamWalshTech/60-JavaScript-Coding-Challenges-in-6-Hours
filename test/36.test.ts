import { expect, test } from "vitest";

const twoSum = (nums: Array<number>, target: number) => {
  const summed = nums.reduce((prev, curr) => {
    const prevAndCurrMeetTarget = prev + curr === target ? true : false

    console.log(prev, curr, target, prevAndCurrMeetTarget)

    return prevAndCurrMeetTarget ? [nums.indexOf(prev), nums.indexOf(curr)]: prev
  })

  return summed
};

test("36. Two Sum", () => {
  expect(twoSum([2, 7, 11, 15], 9)).deep.eq([0, 1]);
  expect(twoSum([3, 2, 4], 6)).deep.eq([1, 2]);
});
