import { calculator } from "../src/calculator.js";

test("adds numbers", () => {
  expect(calculator.add(2, 3)).toBe(5);
});

test("subtracts numbers", () => {
  expect(calculator.subtract(5, 3)).toBe(2);
});

test("multiplies numbers", () => {
  expect(calculator.multiply(4, 3)).toBe(12);
});

test("divides numbers", () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

test("throws on divide by zero", () => {
  expect(() => calculator.divide(1, 0)).toThrow("Division by zero");
});