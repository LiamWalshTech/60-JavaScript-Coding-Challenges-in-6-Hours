import { expect, test } from "vitest";

const isSumEqual = (firstWord, secondWord, targetWord) => {
  // Your solution
};

test("50. Check if Word Equals Summation of Two Words", () => {
  expect(isSumEqual("acb", "cba", "cdb")).eq(true);
  // The numerical value of firstWord 'acb' is '021' -> 21
  // The numerical value of secondWord 'cba' is '210' -> 210
  // The numerical value of targetWord 'cdb' is '231' -> 231
  // So we return true because 21 + 210 == 231

  expect(isSumEqual("aaa", "a", "aab")).eq(false);
  // The numerical value of firstWord 'aaa' is '000' -> 0
  // The numerical value of secondWord 'a' is '0' -> 0
  // The numerical value of targetWord 'aab' is '001' -> 1
  // So we return false because 0 + 0 != 1

  expect(isSumEqual("aaa", "a", "aaaa")).eq(true);
  // The numerical value of firstWord 'aaa' is '000' -> 0
  // The numerical value of secondWord 'a' is '0' -> 0
  // The numerical value of targetWord 'aaaa' is '0000' -> 0
  // So we return true because 0 + 0 == 0
});
