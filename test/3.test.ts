import { expect, test } from "vitest";

const past = (h, m, s) => {
  const millisInSeconds = 1000
  const millisInMinutes = millisInSeconds * 60
  const millisInHours = millisInMinutes * 60

  const sInMillis = s * millisInSeconds
  const mInMillis = m * millisInMinutes
  const hInMillis = h * millisInHours

  return sInMillis + mInMillis + hInMillis
};

test("3. Clock", () => {
  expect(past(0, 0, 0)).eq(0);
  expect(past(0, 1, 1)).eq(61000);
  expect(past(1, 0, 0)).eq(3600000);
  expect(past(1, 0, 1)).eq(3601000);
  expect(past(1, 1, 1)).eq(3661000);
});
