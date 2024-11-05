import { expect, test } from "vitest";

const wave = (str) => {
  // Your solution
};

test("55. Wave, wAve, waVe, wavE", () => {
  expect(wave("hello")).eq(["Hello", "hEllo", "heLlo", "helLo", "hellO"]);
  expect(wave(" gap ")).eq([" Gap ", " gAp ", " gaP "]);
  expect(wave("Two words")).eq([
    "Two words",
    "tWo words",
    "twO words",
    "two Words",
    "two wOrds",
    "two woRds",
    "two worDs",
    "two wordS",
  ]);
});
