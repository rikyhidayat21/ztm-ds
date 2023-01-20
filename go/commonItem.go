package main

import (
	"fmt"
)

/**
 * Common Item
 *
 * Question:
 * Create a function to make sure between 2 arrays
 * Is it have the common item ? if yes return true, if not return false.
 *
 * Step to work:
 * 1. Write down the key points. Make sure you have all the details
 *  - it have 2 arrays of strings
 *  - if between 2 arrays have the common item, it will return true
 *
 * example:
 * const array1 = ['a', 'b', 'c']
 * const array2 = ['d', 'x', 'y', 'o']
 *
 * 2. make sure you double check: what are inpus? what are outputs?
 *  - input here should be 2 pieces of array
 *  - output is boolean, true or false
 *
 * 3. what is the importatnt value of the problem? time, space, memory?  whats the main goals?
 *
 * 4. dont be annoying and ask too many questions
 *
 * 5. start with the naive/brute force approach. first thing that comes into mind.
 *  . it shows that you're able to think well and critically (you don't need to write this code, just speak about it)
 */

var sl1 = []string{"a", "b", "c"}	
var sl2 = []string{"x", "y", "z", "b"}
var elementMap map[string]bool

func main() {
	// result := commonItem1(sl1, sl2)
	// result := commonItem2(sl1, sl2)
	result := commonItem3(sl1, sl2)
	fmt.Println(result)
}

// brute force method
func commonItem1(slice1 []string, slice2 []string) bool {
	for i := 0; i < len(sl1); i++ {
		for j := 0; j < len(sl2); j++ {
			if sl1[i] == sl2[j] {
				return true
			}
		}
	} 

	return false
}


/*
Method 2

-> loop over the first slice then convert the first slice to be a map / hash
-> loop over the seconde slice then check if the item in second slice is exist in the hash / map
*/

func commonItem2(slice1 []string, slice2 []string) bool {
	// initialize map
	elementMap = make(map[string]bool)

	// put slice value to the map
	for _, v := range slice1 {
		elementMap[v] = true
	}

	// check slice is exist in the map
	for _, v := range slice2 {
		if elementMap[v] {
			return true
		}
	}

	return false
}

/*
Method 3

make it modularize
- create a function commonItem3
- create function for convert first slice to be a map
- create a function for check second slice item is exist on map or not
*/

func commonItem3(slice1 []string, slice2 []string) bool {
	// convert slice to map
	convertedSliceToMap := convertSliceToMap(slice1)
	
	// check slice item in map
	result := checkSliceItemInMap(slice2, convertedSliceToMap)

	// return the result
	return result
}

func convertSliceToMap(slice1 []string) map[string]bool {
	initMap := make(map[string]bool)

	// loop through the slice then convert it to be a map
	for _, v := range slice1 {
		initMap[v] = true
	}

	return initMap
}

func checkSliceItemInMap(slice2 []string, mappedData map[string]bool) bool {
	// loop through second slice item
	for _, v := range slice2 {
		if mappedData[v] {
			return true
		}
	}
	return false
}