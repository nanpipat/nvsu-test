const countSmilys = require("./smily");

describe("countSmilys", () => {
  // Test for two valid smileys
  it("should count two valid smileys", () => {
    expect(countSmilys([":)", ";(", ";}", ":-D"])).toBe(2);
  });

  // Test for three valid smileys
  it("should count three valid smileys", () => {
    expect(countSmilys([";D", ":-(", ":-)", ";~)"])).toBe(3);
  });

  // Test for one valid smiley
  it("should count one valid smiley", () => {
    expect(countSmilys([";]", ":[", ";*", ":$", ";-D"])).toBe(1);
  });

  // Test for empty array
  it("should return zero for an empty array", () => {
    expect(countSmilys([])).toBe(0);
  });
});
