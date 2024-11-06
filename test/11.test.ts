import { expect, test } from "vitest";

const getMiddle = (str: string) => {
  const strEvenLength = str.length % 2 === 0 ? true: false
  const middleFrom = strEvenLength ? (str.length / 2) - 1 : Math.floor(str.length / 2) 
  const middleTo = strEvenLength ? (str.length / 2) + 1 : Math.floor(str.length / 2) + 1

  return str.slice(middleFrom, middleTo)
};

test("11. Get the Middle Character", () => {
  expect(getMiddle("test")).eq("es");
  expect(getMiddle("testing")).eq("t");
  expect(getMiddle("middle")).eq("dd");
  expect(getMiddle("A")).eq("A");
});
