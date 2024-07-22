/**
 * Count the number of valid smily faces in the array.
 * @param arr - The input array of potential smily faces
 * @return The count of valid smily faces
 */
export function countSmilys(arr: string[]): number {
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
