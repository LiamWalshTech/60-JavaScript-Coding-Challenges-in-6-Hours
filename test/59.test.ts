import { expect, test } from "vitest";

const isPalindrome = (s) => {
  // Your solution
};

test("59. Valid Palindrome", () => {
  expect(isPalindrome("A man, a plan, a canal: Panama")).eq(true);
  // Explanation: "amanaplanacanalpanama" is a palindrome.
  expect(isPalindrome("race a car")).eq(false);
  // Explanation: "raceacar" is not a palindrome.
  expect(isPalindrome("ab_a")).eq(true);
  // Explanation: "aba" is a palindrome.
  expect(isPalindrome(" ")).eq(true);
  // Explanation: `s` is an empty string "" after removing non-alphanumeric characters.
  // Since an empty string reads the same forward and backward, it is a palindrome.
});
