import { expect, test } from "vitest";

const DNAStrand = (dna) => {
  // Your solution
};

test("27. Complementary DNA", () => {
  expect(DNAStrand("AAAA")).eq("TTTT");
  expect(DNAStrand("ATTGC")).eq("TAACG");
  expect(DNAStrand("GTAT")).eq("CATA");
});
