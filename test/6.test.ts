import { expect, test } from "vitest";

const litres = (time: number) => {
  const litersPerHour = 0.5

  return Math.floor(litersPerHour * time)
};

test("6. Keep Hydrated!", () => {
  expect(litres(0)).eq(0);
  expect(litres(2)).eq(1);
  expect(litres(1.4)).eq(0);
  expect(litres(12.3)).eq(6);
  expect(litres(0.82)).eq(0);
  expect(litres(11.8)).eq(5);
  expect(litres(1787)).eq(893);
});
