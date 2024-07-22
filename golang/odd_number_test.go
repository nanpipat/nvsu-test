package main

import "testing"

func TestFindOddNumber(t *testing.T) {
	// Test for single element array
	t.Run("single element array", func(t *testing.T) {
		if findOddNumber([]int{7}) != 7 {
			t.Errorf("Expected 7, but got %d", findOddNumber([]int{7}))
		}
	})

	// Test for array with three elements
	t.Run("array with three elements", func(t *testing.T) {
		if findOddNumber([]int{1, 1, 2}) != 2 {
			t.Errorf("Expected 2, but got %d", findOddNumber([]int{1, 1, 2}))
		}
	})

	// Test for array with five elements
	t.Run("array with five elements", func(t *testing.T) {
		if findOddNumber([]int{0, 1, 0, 1, 0}) != 0 {
			t.Errorf("Expected 0, but got %d", findOddNumber([]int{0, 1, 0, 1, 0}))
		}
	})

	// Test for array with multiple odd occurrences
	t.Run("array with multiple odd occurrences", func(t *testing.T) {
		if findOddNumber([]int{1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1}) != 4 {
			t.Errorf("Expected 4, but got %d", findOddNumber([]int{1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1}))
		}
	})
}
