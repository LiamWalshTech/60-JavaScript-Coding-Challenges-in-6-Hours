import { expect, test } from "vitest";

const convertToRoman = (number) => {
  // Your solution
};

test("53. Roman Numerals Encoder", () => {
  expect(convertToRoman(4)).eq("IV");
  expect(convertToRoman(9)).eq("IX");
  expect(convertToRoman(11)).eq("XI");
  expect(convertToRoman(19)).eq("XIX");
  expect(convertToRoman(22)).eq("XXII");
  expect(convertToRoman(15)).eq("XV");
  expect(convertToRoman(39)).eq("XXXIX");
  expect(convertToRoman(160)).eq("CLX");
  expect(convertToRoman(207)).eq("CCVII");
  expect(convertToRoman(246)).eq("CCXLVI");
  expect(convertToRoman(789)).eq("DCCLXXXIX");
  expect(convertToRoman(1009)).eq("MIX");
  expect(convertToRoman(1066)).eq("MLXVI");
  expect(convertToRoman(1776)).eq("MDCCLXXVI");
  expect(convertToRoman(1918)).eq("MCMXVIII");
  expect(convertToRoman(1954)).eq("MCMLIV");
  expect(convertToRoman(2014)).eq("MMXIV");
  expect(convertToRoman(2421)).eq("MMCDXXI");
  expect(convertToRoman(3999)).eq("MMMCMXCIX");
});
