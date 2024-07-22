import { manipulate } from "./manipulate";
import assert from "assert";

function testSingleCharacterInput() {
  assert.deepStrictEqual(
    manipulate("a"),
    ["a"],
    "Should handle single character input"
  );
}

function testTwoCharacterInput() {
  assert.deepStrictEqual(
    manipulate("ab").sort(),
    ["ab", "ba"].sort(),
    "Should generate correct manipulations for two characters"
  );
}

function testThreeCharacterInput() {
  assert.deepStrictEqual(
    manipulate("abc").sort(),
    ["abc", "acb", "bac", "bca", "cab", "cba"].sort(),
    "Should generate correct manipulations for three characters"
  );
}

function testInputWithDuplicates() {
  assert.deepStrictEqual(
    manipulate("aabb").sort(),
    ["aabb", "abab", "abba", "baab", "baba", "bbaa"].sort(),
    "Should handle input with duplicates"
  );
}

function runTests() {
  testSingleCharacterInput();
  testTwoCharacterInput();
  testThreeCharacterInput();
  testInputWithDuplicates();
  console.log("All manipulate tests passed!");
}

runTests();
