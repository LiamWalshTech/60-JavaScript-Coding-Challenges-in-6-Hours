import { expect, test } from "vitest";

const getNames = (users) => {
  // Your solution
};

const users = [
  {
    id: "001",
    name: "Alice",
    startDate: "2021-01-03",
  },
  {
    id: "002",
    name: "Bob",
    startDate: "2020-02-01",
  },
  {
    id: "003",
    name: "Claire",
    startDate: "2019-03-01",
  },
];

test("57. Get Names", () => {
  expect(getNames(users)).eq(["Alice", "Bob", "Claire"]);
});
