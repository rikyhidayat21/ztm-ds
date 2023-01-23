/**
 * create a function that reverses a string:
 * 'Hi My name is Riky' should be:
 * 'ykiR si eman yM iH'
 *
 */

package main

import (
	"fmt"
	"strings"
)

func main() {
	str := "Hi My name is Riky"
	fmt.Println(reverseString(str))
}

func reverseString(str string) string {
	// initialize variable result with type slice nil
	result := []string{}

	// convert from string to be a slice
	str_slice := strings.Split(str, "")	

	// loop
	for i := len(str_slice) - 1; i >= 0; i-- {
		result = append(result, str_slice[i])
	}
	return strings.Join(result, "")
}