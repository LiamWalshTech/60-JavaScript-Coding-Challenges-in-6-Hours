import { expect, test } from "vitest";

const domainName = (url) => {
  // Your solution
};

test("51. Extract the Domain Name From a URL", () => {
  expect(domainName("www.google.ca")).eq("google");
  expect(domainName("http://google.com")).eq("google");
  expect(domainName("https://google.com")).eq("google");
  expect(domainName("http://google.co.jp")).eq("google");
  expect(domainName("https://www.google.com")).eq("google");
});
