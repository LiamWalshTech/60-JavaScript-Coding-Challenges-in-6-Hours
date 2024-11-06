import { expect, test } from "vitest";

const duplicateEncode = (word: string) => {
  // Your solution
};

test("31. Duplicate Encoder", () => {
  expect(duplicateEncode("din")).eq("(((");
  expect(duplicateEncode("(( @")).eq("))((");
  expect(duplicateEncode("recede")).eq("()()()");
  expect(duplicateEncode("Success")).eq(")())())");
});
