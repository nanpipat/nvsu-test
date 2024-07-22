package main

import "strings"

// countSmilys counts the number of valid smily faces in the slice.
func countSmilys(arr []string) int {
	// Define valid parts of a smily face
	eyes := []string{":", ";"}
	noses := []string{"-", "~"}
	mouths := []string{")", "D"}

	count := 0

	// Check each face in the array
	for _, face := range arr {
		// Check if the face is valid
		if len(face) == 2 && contains(eyes, string(face[0])) && contains(mouths, string(face[1])) {
			count++
		} else if len(face) == 3 && contains(eyes, string(face[0])) && contains(noses, string(face[1])) && contains(mouths, string(face[2])) {
			count++
		}
	}

	return count
}

// contains checks if a string is in a slice of strings
func contains(slice []string, str string) bool {
	return strings.Contains(strings.Join(slice, ""), str)
}
