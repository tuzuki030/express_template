import { add } from "../src/helpers/math";

describe("math test", () => {
  test("add", () => {
    expect(add(1, 2)).toBe(3);
  });

  test("add", () => {
    expect(add(1, 1)).toBe(2);
  });
});
