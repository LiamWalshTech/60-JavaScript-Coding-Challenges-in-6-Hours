import { expect, test } from "vitest";

const XO = (str: string) => {
  const onlyXOs = str.replace(/[^oxOX.]/gi, '')
  const onlyXs = onlyXOs.replace(/[?^oO]/gi, '')
  const onlyOs = onlyXOs.replace(/[?^xX]/gi, '')

  const numOfX = onlyXs.length
  const numOfO = onlyOs.length

  return numOfX === numOfO ? true : false
};

test("22. Exes and Ohs", () => {
  expect(XO("xo")).eq(true);
  expect(XO("Oo")).eq(false);
  expect(XO("xxOo")).eq(true);
  expect(XO("xxxm")).eq(false);
  expect(XO("ooom")).eq(false);
  expect(XO("ty")).eq(true);
});
