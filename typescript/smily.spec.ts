import { countSmilys } from "./smily";
import assert from "assert";

function testTwoValidSmilys() {
  assert.strictEqual(
    countSmilys([":)", ";(", ";}", ":-D"]),
    2,
    "Should count two valid smilys"
  );
}

function testThreeValidSmilys() {
  assert.strictEqual(
    countSmilys([";D", ":-(", ":-)", ";~)"]),
    3,
    "Should count three valid smilys"
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
  testTwoValidSmilys();
  testThreeValidSmilys();
  testOneValidSmily();
  testEmptyArray();
  console.log("All smily tests passed!");
}

runTests();
