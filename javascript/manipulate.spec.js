const manipulate = require("./manipulate");

describe("manipulate", () => {
  // Test for single character input
  it("should handle single character input", () => {
    expect(manipulate("a")).toEqual(["a"]);
  });

  // Test for two character input
  it("should generate correct manipulates for two characters", () => {
    expect(manipulate("ab").sort()).toEqual(["ab", "ba"].sort());
  });

  // Test for three character input
  it("should generate correct manipulates for three characters", () => {
    expect(manipulate("abc").sort()).toEqual(
      ["abc", "acb", "bac", "bca", "cab", "cba"].sort()
    );
  });

  // Test for input with duplicates
  it("should handle input with duplicates", () => {
    expect(manipulate("aabb").sort()).toEqual(
      ["aabb", "abab", "abba", "baab", "baba", "bbaa"].sort()
    );
  });
});
