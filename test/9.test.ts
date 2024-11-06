import { expect, test } from "vitest";

const disemvowel = (str: string) => {
  return str.replace(/[?^aeiou.]/gi, '')
};

test("9. Disemvowel Trolls", () => {
  expect(disemvowel("This website is for losers LOL!")).eq(
    "Ths wbst s fr lsrs LL!"
  );
});
