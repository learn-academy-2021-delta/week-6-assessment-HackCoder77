// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

describe('capitalized', () => {
  it('returns an array with a sentence about each person with their name capitalized', () => {
    expect(capitalized(people)).toEqual('Ford Prefect is a hitchhiker.')
    expect(capitalized(people)).toEqual('Zaphod Beeblebrox is president of the galaxy.')
    expect(capitalized(people)).toEqual('Arthur Dent is a radio employee.')
  })
})


var people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]

  // Create a function called eachPerson that takes in an array of objects
  // Use .map to iterate through each value
  // use string interpolation to return an array with a sentence about each person. Use .replace with a regex function on value.name to return the first letter of each string capitalized.


const eachPerson = (array) => {
  return array.map(value => {
    return `${value.name.replace(/(?:^|\s)\S/g, function(finalName) {return finalName.toUpperCase()})} is ${value.occupation}.`
    })
  }

// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// b) Create the function that makes the test pass.

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.


var hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
var hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

describe('remainder', () => {
  it('returns the REMAINDERS of the numbers when divided by 3.', () => {
    expect(remainder(hodgepodge1)).toEqual([2, 0, -1, 0])
    expect(remainder(hodgepodge2)).toEqual([2, 1, -1])
 
  })
})

//only accept numbers
//iterate thru array
//take modulus divided by 3

remainder = (array) => {

  let numbers =[];

    for(let i=0; i<array.length; i++){
      if(typeof array[i] === 'number'){
        numbers.push(array[i] % 3);
      }
     
    }
    return numbers;
  }


// b) Create the function that makes the test pass.



// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe('cubed', () => {
  it('returns the sum of all the numbers cubed', () => {
    expect(cubed(cubeAndSum1)).toEqual(99)
    expect(cubed(cubeAndSum2)).toEqual(1125)
 
  })
})

var cubeAndSum1 = [2, 3, 4]
// Expected output: 99

var cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

// b) Create the function that makes the test pass.

//make variable set to 0
//iterate thru the numbers
//cube all the numbers and put in 0 variable
//increment 0 variable by iterated number
//return new final number of cubed numbers added together


cubed = (array) => {
  let final = 0;
  for(let i in array){
    let cub = array[i] ** 3;
    final += cub
  }
  return final 
}


const eachPerson = (array) => {
  // Create a function called eachPerson that takes in an array of objects
  return array.map(value => {
    // Use .map to iterate through each value
    return `${value.name.replace(/(?:^|\s)\S/g, function(finalName) {return finalName.toUpperCase()})} is ${value.occupation}.`
      // use string interpolation to return an array with a sentence about each person. Use .replace with a regex function on value.name to return the first letter of each string capitalized.
    })
  }

  eachPerson(people)