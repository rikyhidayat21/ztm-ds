package main

import "fmt"

/**
* rotate the array using size of the rotation
* if the rotation is positif integer -> it will rotate to right side
* if the rotation is negatif integer -> it will rotate to left side
*
* let array1 = [1, 2, 3, 4, 5]
* let rotate = 1
* so the result will be => [5, 1, 2, 3, 4]
 */

func main() {
	slice := []string{
		"a",
		"b",
		"c",
		"d",
		"e",
	}

	rotate := 2

	fmt.Println(rotateSlice(slice, rotate))
}

func rotateSlice(slice []string, rotate int) []string {
	if rotate == 0 {
		return slice
	}

	if rotate < 0 {
		for i := rotate; i < 0; i++ {
			idx := 1 // initialize idx variable to be using in slice value
			firstItem := slice[0] // get the first item
			slice = slice[idx:] // by doing this, it will change the slice to be have element from idx:
			slice = append(slice, firstItem) // add the first item to last element in the slice
			idx++	// increment the index
		}
	} else {
		for i := 0; i < rotate; i++ {
			lastItem := slice[len(slice) - 1] // get the last item of the element
			slice = slice[:len(slice) - 1]	// change the slice to not include the last item
			slice = append([]string{lastItem}, slice...) // add the last item to the first element and so on 
		}
	}

	return slice
}