package main

import (
	"reflect"
	"testing"
)

func TestManipulate(t *testing.T) {
	// Test for single character input
	t.Run("single character input", func(t *testing.T) {
		if !reflect.DeepEqual(manipulate("a"), []string{"a"}) {
			t.Errorf("Expected ['a'], but got %v", manipulate("a"))
		}
	})

	// Test for two character input
	t.Run("two character input", func(t *testing.T) {
		if !reflect.DeepEqual(manipulate("ab"), []string{"ab", "ba"}) {
			t.Errorf("Expected ['ab', 'ba'], but got %v", manipulate("ab"))
		}
	})

	// Test for three character input
	t.Run("three character input", func(t *testing.T) {
		expected := []string{"abc", "acb", "bac", "bca", "cab", "cba"}
		if !reflect.DeepEqual(manipulate("abc"), expected) {
			t.Errorf("Expected %v, but got %v", expected, manipulate("abc"))
		}
	})

	// Test for input with duplicates
	t.Run("input with duplicates", func(t *testing.T) {
		expected := []string{"aabb", "abab", "abba", "baab", "baba", "bbaa"}
		if !reflect.DeepEqual(manipulate("aabb"), expected) {
			t.Errorf("Expected %v, but got %v", expected, manipulate("aabb"))
		}
	})
}
