import { expect, test } from "vitest";

const DNAStrand = (dna: string) => {
  return dna.split('').map(letter => {
    switch (letter) {
      case 'A':
        return 'T'
        break;

      case 'T':
        return 'A'
        break;

      case 'C':
        return 'G'
        break;

      case 'G':
        return 'C'
        break;
    
      default:
        break;
    }
  }).join('')
};

test("27. Complementary DNA", () => {
  expect(DNAStrand("AAAA")).eq("TTTT");
  expect(DNAStrand("ATTGC")).eq("TAACG");
  expect(DNAStrand("GTAT")).eq("CATA");
});
