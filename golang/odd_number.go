package main

// findOddNumber finds the integer that appears an odd number of times in the slice.
func findOddNumber(arr []int) int {
	count := make(map[int]int)

	// Count the frequency of each number
	for _, num := range arr {
		count[num]++
	}

	// Find the number that appears an odd number of times
	for num, freq := range count {
		if freq%2 != 0 {
			return num
		}
	}

	// Fallback in case no odd frequency number is found (shouldn't happen with valid input)
	panic("No integer appears an odd number of times")
}
