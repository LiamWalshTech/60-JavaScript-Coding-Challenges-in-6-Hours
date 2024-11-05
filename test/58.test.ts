import { expect, test } from "vitest";

const toCamel = (obj) => {
  // Your solution
};

test("58. Object Keys from snake_case to camelCase", () => {
  expect(
    toCamel({
      first_name: "John",
      last_name: "Rambo",
      favorite_movie: "First Blood",
    })
  ).eq({ firstName: "John", lastName: "Rambo", favoriteMovie: "First Blood" });
});
