/**
 * Generate all unique manipulations of a given string.
 * @param str - The input string
 * @return Array of unique manipulations
 */
export function manipulate(str: string): string[] {
  // Base case: if string is 1 character or less, return it
  if (str.length <= 1) return [str];

  let result: string[] = [];

  // Loop through each character in the string
  for (let i = 0; i < str.length; i++) {
    // Get the current character
    const currentChar = str[i];
    // Get the rest of the string without the current character
    const remainingChars = str.slice(0, i) + str.slice(i + 1);

    // Recursively get manipulations of the remaining characters
    const subManipulations = manipulate(remainingChars);

    // Add the current character to the beginning of each sub-manipulation
    for (let subManip of subManipulations) {
      result.push(currentChar + subManip);
    }
  }

  // Remove duplicates by converting to Set and back to array
  return Array.from(new Set(result));
}
