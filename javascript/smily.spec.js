import countSmilys from "./smily.js";
import assert from "assert";

function testTwoValidSmilies() {
  assert.strictEqual(
    countSmilys([":)", ";(", ";}", ":-D"]),
    2,
    "Should count two valid smilies"
  );
}

function testThreeValidSmilies() {
  assert.strictEqual(
    countSmilys([";D", ":-(", ":-)", ";~)"]),
    3,
    "Should count three valid smilies"
  );
}

function testOneValidSmily() {
  assert.strictEqual(
    countSmilys([";]", ":[", ";*", ":$", ";-D"]),
    1,
    "Should count one valid smily"
  );
}

function testEmptyArray() {
  assert.strictEqual(
    countSmilys([]),
    0,
    "Should return zero for an empty array"
  );
}

function runTests() {
  testTwoValidSmilies();
  testThreeValidSmilies();
  testOneValidSmily();
  testEmptyArray();
  console.log("All smily tests passed!");
}

runTests();
