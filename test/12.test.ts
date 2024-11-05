import { expect, test } from "vitest";

const likes = (names) => {
  // Your solution
};

test("12. Who likes it?", () => {
  expect(likes([])).eq("no one likes this");
  expect(likes(["Peter"])).eq("Peter likes this");
  expect(likes(["Jacob", "Alex"])).eq("Jacob and Alex like this");
  expect(likes(["Max", "John", "Mark"])).eq("Max, John and Mark like this");
  expect(likes(["Alex", "Jacob", "Mark", "Max"])).eq(
    "Alex, Jacob and 2 others like this"
  );
});
