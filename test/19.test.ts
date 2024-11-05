import { expect, test } from "vitest";

const spinWords = (str) => {
  // Your solution
};

test("19. Stop gninnipS My sdroW!", () => {
  expect(spinWords("This is a test")).eq("This is a test");
  expect(spinWords("Hey fellow warriors")).eq("Hey wollef sroirraw");
  expect(spinWords("This is another test")).eq("This is rehtona test");
});
