import { expect, test } from "vitest";

const spinWords = (str: string) => {
  const words = str.split(' ')
  const reversedWords = words.map(word => {
    if (word.length < 5) {
      return word
    }

    return word.split('').reverse().join('')
  })

  return reversedWords.join(' ')
};

test("19. Stop gninnipS My sdroW!", () => {
  expect(spinWords("This is a test")).eq("This is a test");
  expect(spinWords("Hey fellow warriors")).eq("Hey wollef sroirraw");
  expect(spinWords("This is another test")).eq("This is rehtona test");
});
