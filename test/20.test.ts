import { expect, test } from "vitest";

const findShort = (str: string) => {
  const words = str.split(' ')
const shortestWord = words.reduce((previousWord, currentWord) => currentWord.length < previousWord.length ? currentWord : previousWord)

return shortestWord.length
};

test("20. Shortest Word", () => {
  expect(findShort("Test where final word shortest see")).eq(3);
  expect(findShort("Lets all go on holiday somewhere very cold")).eq(2);
  expect(findShort("i want to travel the world writing code one day")).eq(1);
});
