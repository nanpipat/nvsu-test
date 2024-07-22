package main

import "testing"

func TestCountSmilys(t *testing.T) {
	// Test for two valid smilies
	t.Run("two valid smilies", func(t *testing.T) {
		if countSmilys([]string{":)", ";(", ";}", ":-D"}) != 2 {
			t.Errorf("Expected 2, but got %d", countSmilys([]string{":)", ";(", ";}", ":-D"}))
		}
	})

	// Test for three valid smilies
	t.Run("three valid smilies", func(t *testing.T) {
		if countSmilys([]string{";D", ":-(", ":-)", ";~)"}) != 3 {
			t.Errorf("Expected 3, but got %d", countSmilys([]string{";D", ":-(", ":-)", ";~)"}))
		}
	})

	// Test for one valid smily
	t.Run("one valid smily", func(t *testing.T) {
		if countSmilys([]string{";]", ":[", ";*", ":$", ";-D"}) != 1 {
			t.Errorf("Expected 1, but got %d", countSmilys([]string{";]", ":[", ";*", ":$", ";-D"}))
		}
	})

	// Test for empty array
	t.Run("empty array", func(t *testing.T) {
		if countSmilys([]string{}) != 0 {
			t.Errorf("Expected 0, but got %d", countSmilys([]string{}))
		}
	})
}
