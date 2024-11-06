import { expect, test } from "vitest";

const solution = (number: number) => {
  if (number <= 0) {
    return 0
  }

  let sum = 0;

  for (let index = 0; index < number; index++) {
    if (index > 0 && index != 1) {
      const multipleOfThree = index % 3
      const multipleOfFive = index % 5

      if (multipleOfThree === 0 || multipleOfFive === 0) {
        sum += index
      }
    }
    
    
  }

  return sum
  
};

test("1. Multiples of 3 or 5", () => {
  expect(solution(0)).eq(0);
  expect(solution(-15)).eq(0);
  expect(solution(10)).eq(23);
  expect(solution(20)).eq(78);
  expect(solution(200)).eq(9168);
});
