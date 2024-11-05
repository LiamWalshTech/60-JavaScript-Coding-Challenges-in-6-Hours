import { expect, test } from "vitest";

String.prototype.capitalize = function () {
  // Your solution
};

test("26. Capitalize Words", () => {
  var str = "How can mirrors be real if our eyes aren't real";
  expect(str.capitalize()).eq(
    "How Can Mirrors Be Real If Our Eyes Aren't Real"
  );
});
