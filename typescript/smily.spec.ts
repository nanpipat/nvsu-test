import { countSmilys } from "./smily";

describe("countSmilys", () => {
  // Test for two valid smilies
  it("should count two valid smilies", () => {
    expect(countSmilys([":)", ";(", ";}", ":-D"])).toBe(2);
  });

  // Test for three valid smilies
  it("should count three valid smilies", () => {
    expect(countSmilys([";D", ":-(", ":-)", ";~)"])).toBe(3);
  });

  // Test for one valid smily
  it("should count one valid smily", () => {
    expect(countSmilys([";]", ":[", ";*", ":$", ";-D"])).toBe(1);
  });

  // Test for empty array
  it("should return zero for an empty array", () => {
    expect(countSmilys([])).toBe(0);
  });
});
