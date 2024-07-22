import { findOddNumber } from "./odd-number";

describe("findOddNumber", () => {
  // Test for single element array
  it("should find the odd number in a single-element array", () => {
    expect(findOddNumber([7])).toBe(7);
  });

  // Test for array with three elements
  it("should find the odd number in an array with three elements", () => {
    expect(findOddNumber([1, 1, 2])).toBe(2);
  });

  // Test for array with five elements
  it("should find the odd number in an array with five elements", () => {
    expect(findOddNumber([0, 1, 0, 1, 0])).toBe(0);
  });

  // Test for array with multiple odd occurrences
  it("should find the odd number in an array with multiple odd occurrences", () => {
    expect(findOddNumber([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])).toBe(4);
  });
});
