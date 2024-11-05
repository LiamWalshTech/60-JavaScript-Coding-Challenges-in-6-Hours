import { expect, test } from "vitest";

const songDecoder = (song) => {
  // Your solution
};

test("39. Dubstep", () => {
  expect(songDecoder("AWUBBWUBC")).eq("A B C");
  expect(songDecoder("AWUBWUBWUBBWUBWUBWUBC")).eq("A B C");
  expect(songDecoder("WUBAWUBBWUBCWUB")).eq("A B C");
  expect(songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB")).eq(
    "WE ARE THE CHAMPIONS MY FRIEND"
  );
});
