import { expect, test } from "vitest";

const descendingOrder = (n: number) => {
  const nString = n.toString().split('').map(num => Number(num)).sort().reverse().join('')

  return Number(nString)
};

test("17. Descending Order", () => {
  expect(descendingOrder(0)).eq(0);
  expect(descendingOrder(1)).eq(1);
  expect(descendingOrder(1021)).eq(2110);
  expect(descendingOrder(42145)).eq(54421);
  expect(descendingOrder(145263)).eq(654321);
  expect(descendingOrder(123456789)).eq(987654321);
});
