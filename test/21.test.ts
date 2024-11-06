import { expect, test } from "vitest";

const countBits = (n: number) => {
  // n as binary
  const nBinary = n.toString(2)

  // binary as string
  const nBinaryString = nBinary.toString()

  // count the number of 1s in the string
  const numOfBytes = nBinaryString.split('').filter(num => num === '1').length

  return numOfBytes
};

test("21. Bit Counting", () => {
  expect(countBits(0)).eq(0);
  expect(countBits(4)).eq(1);
  expect(countBits(7)).eq(3);
  expect(countBits(9)).eq(2);
});
