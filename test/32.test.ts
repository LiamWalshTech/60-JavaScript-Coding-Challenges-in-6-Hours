import { expect, test } from "vitest";

const reverseString = (str: string) => {
  let reversedString = ''
  const strAsArray = str.split('')

  for (let index = strAsArray.length; index > 0; index--) {
    reversedString = `${reversedString}${str[index - 1]}`
  }

  return reversedString
};

test("32. Reversed Strings", () => {
  expect(reverseString("hello")).eq("olleh");
  expect(reverseString("world")).eq("dlrow");
  expect(reverseString("")).eq("");
  expect(reverseString("h")).eq("h");
});
