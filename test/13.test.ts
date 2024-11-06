import { expect, test } from "vitest";

const createPhoneNumber = (numbers: Array<number>) => {
  const firstSection = numbers.slice(0, 3).join('')
  const secondSection = numbers.slice(3, 6).join('')
  const thirdSection = numbers.slice(6, 10).join('')
  const formatedPhoneNumber = `(${firstSection}) ${secondSection}-${thirdSection}`

  return formatedPhoneNumber
};

test("13. Create Phone Number", () => {
  expect(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).eq(
    "(123) 456-7890"
  );
  expect(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])).eq(
    "(111) 111-1111"
  );
  expect(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).eq(
    "(123) 456-7890"
  );
});
