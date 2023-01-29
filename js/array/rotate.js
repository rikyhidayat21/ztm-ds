/**
 * rotate the array using size of the rotation
 * if the rotation is positif integer -> it will rotate to right side
 * if the rotation is negatif integer -> it will rotate to left side
 * 
 * let array1 = [1, 2, 3, 4, 5]
 * let rotate = 1
 * so the result will be => [5, 1, 2, 3, 4]
 */

let array1 = [1, 2, 3, 4, 5]
let rotate = 3 

function rotateArray(array, rotate) {
  if (rotate === 0) return array

  if (rotate < 0) {
    for (let i = rotate; i < 0; i++) {
      let shifted = array.shift()
      array.push(shifted)
    }
  } else {
    for (let i = 0; i < rotate; i++) {
      array.unshift(array.pop())
    }
  }

  return array
}

console.log(rotateArray(array1, rotate))