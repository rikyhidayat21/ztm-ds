/**
 * create a function that reverses a string:
 * 'Hi My name is Riky' should be:
 * 'ykiR si eman yM iH'
 * 
 */

const str = 'Hi my name is Riky'

function reverseString(str) {
  if (!str || str.length < 2 || typeof str !== 'string') return 'please use correct params'

  let result = []
  for (let i = str.length - 1; i >= 0; i--) {
    result.push(str[i])
  }
  return result.join('')
}

function reverseString2(str) {
  return str.split('').reverse().join('')
}

// using spread operator
const reverseString3 = str => [...str].reverse().join('')

console.log(reverseString3(str))