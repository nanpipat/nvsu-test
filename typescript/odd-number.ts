/**
 * Find the integer that appears an odd number of times in the array.
 * @param {number[]} arr - The input array of integers
 * @return {number} - The integer that appears an odd number of times
 */
export function findOddNumber(arr: number[]): number {
  const count: { [key: number]: number } = {};

  // Count the frequency of each number
  for (const num of arr) {
    count[num] = (count[num] || 0) + 1;
  }

  // Find the number that appears an odd number of times
  for (const num in count) {
    if (count[num] % 2 !== 0) {
      return Number(num);
    }
  }

  // Fallback in case no odd frequency number is found (shouldn't happen with valid input)
  throw new Error("No integer appears an odd number of times");
}
