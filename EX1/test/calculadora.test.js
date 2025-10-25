const { soma, subtrai } = require("../src/calculadora");

test("soma dois números corretamente", () => {
  expect(soma(2, 3)).toBe(5);
});

test("subtrai dois números corretamente", () => {
  expect(subtrai(10, 4)).toBe(6);
});