import { capitalize } from "../src/capitalize.js";

test("capitalizes first letter", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("handles empty string", () => {
  expect(capitalize("")).toBe("");
});

test("makes rest lowercase", () => {
  expect(capitalize("hELLO")).toBe("Hello");
});