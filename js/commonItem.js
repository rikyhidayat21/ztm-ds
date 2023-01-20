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


// metode bruteforce
// O(n^2)
// const array1 = ['a', 'b', 'c']
// const array2 = ['d', 'x', 'y', 'o']

// function commonItem(arr1, arr2) {
//   if (arr1 === undefined || arr2 === undefined) {
//     return 'please input two params'
//   }

//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j]) {
//         return true
//       }
//     }
//   }
//   return false
// }

// console.log(commonItem(array1, array2))

// improvement - metode hash table 

/**
 * Step work:
 * 1. go through with the solution
 *  - convert first array to be an object
 *  - then loop to second array pointing to the property of object
 * 
 * example:
 * array1 => obj {
 *  a: true,
 *  b: true,
 *  c: true
 * }
 * 
 * array2[index] === obj.properties
 */

const array1 = ['a', 'b', 'c']
const array2 = ['d', 'x', 'y', '0']

// function commonItem2(arr1, arr2) {
//   // validate
//   if (arr1 === undefined || arr2 === undefined) throw "please use two params"
//   if (arr1 === null || arr2 === null) throw "params cannot be null"

//   // convert first array to be an object where properties === items in the array
//   let hash = {}
//   for (let i = 0; i < arr1.length; i++) {
//     if (!hash[arr1[i]]) {
//       let item = arr1[i]
//       hash[item] = true
//     }
//   }

//   // loop second array and check if the items in second array exist on created object
//   for (let j = 0; j < arr2.length; j++) {
//     if (hash[arr2[j]]) {
//       return true
//     }
//   }

//   return false
// }

// console.log(commonItem2(array1, null))


// method 3 - create more readable (languange specific)

// function commonItem3(arr1, arr2) {
//   return arr1.some(item => arr2.includes(item))
// }

// console.log(commonItem3(array1, array2))

// method 4 - modularize

function commonItem4(arr1, arr2) {
  // create object
  let mappedObject = mappingObject(arr1)
  let result = checkData(mappedObject, arr2)
  return result
}

function mappingObject(arr1) {
  let hash = {}
   for (let i = 0; i < arr1.length; i++) {
    if (!hash[arr1[i]]) {
      let item = arr1[i]
      hash[item] = true
    }
  } 
  return hash
}

function checkData(map, arr2) {
  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      return true
    }
  }

  return false
}

console.log(commonItem4(array1, array2))