/**
 * Count the number of valid smiley faces in the array.
 * @param {string[]} arr - The input array of potential smiley faces
 * @return {number} - The count of valid smiley faces
 */
function countSmilys(arr) {
  // Define valid parts of a smily face
  const eyes = [":", ";"];
  const noses = ["-", "~"];
  const mouths = [")", "D"];

  let count = 0;

  // Check each face in the array
  for (let face of arr) {
    // Check if the face is valid
    if (
      eyes.includes(face[0]) &&
      mouths.includes(face[face.length - 1]) &&
      (face.length === 2 || (face.length === 3 && noses.includes(face[1])))
    ) {
      count++;
    }
  }

  return count;
}

module.exports = countSmilys;
