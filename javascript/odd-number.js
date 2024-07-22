/**
 * Find the integer that appears an odd number of times in the array.
 * @param {number[]} arr - The input array of integers
 * @return {number} - The integer that appears an odd number of times
 */
export default function findOdd(arr) {
  const count = {};

  // Count the frequency of each number
  for (let num of arr) {
    count[num] = (count[num] || 0) + 1;
  }

  // Find the number that appears an odd number of times
  for (let num in count) {
    if (count[num] % 2 !== 0) {
      return Number(num);
    }
  }
}

// module.exports = findOdd;
