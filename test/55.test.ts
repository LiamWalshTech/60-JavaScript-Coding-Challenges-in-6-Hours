import { expect, test } from "vitest";

const wave = (str: string) => {
  const stringWaves = str.split('').map((letter, index) => {
    console.log(letter)
    if (letter.trim().length === 0) {
      return letter
    }

    return `${str.slice(0, index)}${letter.toLocaleUpperCase()}${str.slice(index + 1, str.length)}`
  })

  return stringWaves
};

test("55. Wave, wAve, waVe, wavE", () => {
  expect(wave("hello")).deep.eq(["Hello", "hEllo", "heLlo", "helLo", "hellO"]);
  expect(wave(" gap ")).deep.eq([" Gap ", " gAp ", " gaP "]);
  expect(wave("Two words")).deep.eq([
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
