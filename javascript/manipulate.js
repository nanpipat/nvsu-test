/**
 * Generate all unique manipulate of a given string.
 * @param {string} str - The input string
 * @return {string[]} - Array of unique manipulate
 */
function manipulate(str) {
  // Base case: if string is 1 character or less, return it
  if (str.length <= 1) return [str];

  let result = [];

  // Loop through each character in the string
  for (let i = 0; i < str.length; i++) {
    // Get the current character
    const currentChar = str[i];
    // Get the rest of the string without the current character
    const remainingChars = str.slice(0, i) + str.slice(i + 1);

    // Recursively get manipulate of the remaining characters
    const subManipulate = manipulate(remainingChars);

    // Add the current character to the beginning of each sub-permutation
    for (let subPerm of subManipulate) {
      result.push(currentChar + subPerm);
    }
  }

  // Remove duplicates by converting to Set and back to array
  return Array.from(new Set(result));
}

module.exports = manipulate;
