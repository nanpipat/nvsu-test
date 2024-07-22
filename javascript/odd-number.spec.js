const findOdd = require("./odd-number");

describe("findOdd", () => {
  // Test for single element array
  it("should find the odd int in a single-element array", () => {
    expect(findOdd([7])).toBe(7);
  });

  // Test for array with three elements
  it("should find the odd int in an array with three elements", () => {
    expect(findOdd([1, 1, 2])).toBe(2);
  });

  // Test for array with five elements
  it("should find the odd int in an array with five elements", () => {
    expect(findOdd([0, 1, 0, 1, 0])).toBe(0);
  });

  // Test for array with multiple odd occurrences
  it("should find the odd int in an array with multiple odd occurrences", () => {
    expect(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])).toBe(4);
  });
});
