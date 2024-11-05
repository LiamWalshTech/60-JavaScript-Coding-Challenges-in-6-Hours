import { expect, test } from "vitest";

const accum = (str) => {
  // Your solution
};

test("18. Mumbling", () => {
  expect(accum("abcd")).eq("A-Bb-Ccc-Dddd");
  expect(accum("cwAt")).eq("C-Ww-Aaa-Tttt");
  expect(accum("RqaEzty")).eq("R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy");
});
