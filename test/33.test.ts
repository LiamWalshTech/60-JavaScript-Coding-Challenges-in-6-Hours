import { expect, test } from "vitest";

const persistence = (num: number) => {
  let loops = 0

  const productOfDigits = (digits: Array<number>) => {
    const multiplied = digits.reduce((prev, curr) => {
      return prev * curr
    }, 1)

    return multiplied
  }

  const numAsArray = (num: number) => num.toString().split('').map(digit => Number(digit))

  let isSingleDigitNow = false
  let mutatedNumAsArray = numAsArray(num)
  while (isSingleDigitNow) {
    const product = productOfDigits(mutatedNumAsArray)

    product < 10 ? isSingleDigitNow = true : null
    console.log(product, isSingleDigitNow)
  }

  return loops
};

test("33. Persistent Bugger", () => {
  expect(persistence(999)).eq(4);
  // because 9*9*9=729, 7*2*9=126, 1*2*6=12, and finally 1*2=2

  expect(persistence(93)).eq(3);
  // because 9*3=27, 2*7=14, 1*4=4 and 4 has only one digit

  expect(persistence(5)).eq(0);
  // because 5 is already a single-digit number
});
