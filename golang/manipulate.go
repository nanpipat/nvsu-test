package main

import "sort"

// manipulate generates all unique manipulations of a given string.
func manipulate(str string) []string {
	// Base case: if string is 1 character or less, return it
	if len(str) <= 1 {
		return []string{str}
	}

	var result []string

	// Loop through each character in the string
	for i := 0; i < len(str); i++ {
		// Get the current character
		currentChar := string(str[i])
		// Get the rest of the string without the current character
		remainingChars := str[:i] + str[i+1:]

		// Recursively get manipulations of the remaining characters
		subManipulations := manipulate(remainingChars)

		// Add the current character to the beginning of each sub-manipulation
		for _, subManip := range subManipulations {
			result = append(result, currentChar+subManip)
		}
	}

	// Remove duplicates
	uniqueResult := removeDuplicates(result)

	// Sort the result for consistency
	sort.Strings(uniqueResult)

	return uniqueResult
}

// removeDuplicates removes duplicate strings from a slice
func removeDuplicates(strSlice []string) []string {
	keys := make(map[string]bool)
	var list []string
	for _, entry := range strSlice {
		if _, value := keys[entry]; !value {
			keys[entry] = true
			list = append(list, entry)
		}
	}
	return list
}
