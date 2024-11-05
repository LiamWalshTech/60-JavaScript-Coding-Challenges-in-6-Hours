import { expect, test } from "vitest";

const disemvowel = (str) => {
  // Your solution
};

test("9. Disemvowel Trolls", () => {
  expect(disemvowel("This website is for losers LOL!")).eq(
    "Ths wbst s fr lsrs LL!"
  );
});
