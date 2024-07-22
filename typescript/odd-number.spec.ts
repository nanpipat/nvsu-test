import { findOddNumber } from "./odd-number";
import assert from "assert";

function testSingleElementArray() {
  assert.strictEqual(
    findOddNumber([7]),
    7,
    "Should find the odd number in a single-element array"
  );
}

function testArrayWithThreeElements() {
  assert.strictEqual(
    findOddNumber([1, 1, 2]),
    2,
    "Should find the odd number in an array with three elements"
  );
}

function testArrayWithFiveElements() {
  assert.strictEqual(
    findOddNumber([0, 1, 0, 1, 0]),
    0,
    "Should find the odd number in an array with five elements"
  );
}

function testArrayWithMultipleOddOccurrences() {
  assert.strictEqual(
    findOddNumber([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]),
    4,
    "Should find the odd number in an array with multiple odd occurrences"
  );
}

function runTests() {
  testSingleElementArray();
  testArrayWithThreeElements();
  testArrayWithFiveElements();
  testArrayWithMultipleOddOccurrences();
  console.log("All odd-number tests passed!");
}

runTests();
