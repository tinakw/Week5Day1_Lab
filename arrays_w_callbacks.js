// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

// const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

//Every:
// 1. Determine if every number is greater than or equal to 0

//    const greaterEqualZero = (eachNum) => eachNum >= 0;
//    console.log(nums.every(greaterEqualZero)) // output true

// 2. Determine if every word shorter than 8 characters

// const wordLength = (word) => word.length < 8;
// console.log(panagram.every(wordLength)); // output true

// -------------------------------
//Filter:
// 1. Filter the array for numbers less than 4

// const lessThanFour = (eachNum) =>  eachNum  < 4;
// console.log(nums.every(lessThanFour)); // output false

// 2. Filter words that have an even length
// (Links to an external site.)

// const evenWords = (word) => word.length % 2 === 0;
// console.log(panagram.filter(evenWords));  // output [ 'over', 'lazy' ]

// ---------------------------------
//Find:
// 1. Find the first value divisible by 5

// const divFiv = nums.find(eachNum => eachNum % 5 === 0);
// console.log(divFiv); //output 5

// 2. Find the first word that is longer than 5 characters

// const longerThanFive = panagram.find(word => word.length > 5);
// console.log(longerThanFive)  // output undefined

// -----------------------------------
// Find Index:
// 1. Find the index of the first number that is divisible by 3

// const divThree = (eachNum) => eachNum %3 === 0;
// console.log(nums.findIndex(divThree)) // output 2

// 2. Find the index of the first word that is less than 2 characters long

   // const smallWord = (word) => word.length < 2;
   // console.log(panagram.findIndex(smallWord)) // output -1

//-------------------------------------
//For Each:
// 1. console.log each value of the nums array multiplied by 3

// const numsMultThree = (eachNum) => console.log(eachNum * 3)
// console.log(nums.forEach(numsMultThree)); // output 
// 3
// 6
// 9
// 12
// 15
// 18
// 21
// 24
// 27
// 30
// 0
// undefined

// 2. console.log each word with an exclamation point at the end of it

// const exclamationWords = (word) => console.log(word + "!");
// console.log(panagram.forEach(exclamationWords)) // output
// The!
// quick!
// brown!
// fox!
// jumps!
// over!
// the!
// lazy!
// dog!
// undefined

//--------------------------------------------

//Thought Questions
// Some
// 1. Find out if some numbers are divisible by 7

// const divSeven = (eachNum) => eachNum % 7 === 0;
// console.log(nums.some(divSeven)); // output true 

// 2. Find out if some words have the letter a in them

// const wordWithA = (word) => word.match('a');
// console.log(panagram.some(wordWithA)); // output true

//-----------------------------------------------
// Reduce
// 1. Add all the numbers in the array together using the reduce method

// const initialValue = 0;
// const sumWithInitial = nums.reduce(
//   (previousValue, currentValue) => previousValue + currentValue,
//   initialValue
// );

// console.log(sumWithInitial);  // output 55


// 2. concatenate all the words using reduce

// const initialValue = '';
// const sumWithInitial = panagram.reduce(
//   (previousValue, currentValue) => previousValue + ' ' + currentValue + '',
//   initialValue
// );
// console.log(sumWithInitial);  // output The quick brown fox jumps over the lazy dog

//----------------------------------------------

//Sort
// Try to sort without any arguments, do you get what you'd expect with the numbers array?

// nums.sort();
// console.log(nums)  //output [
    // 0, 1, 10, 2, 3,
    // 4, 5,  6, 7, 8,
    // 9
// ]

// Try to sort without any arguments, do you get what you'd expect with the words array?

// panagram.sort();
// console.log(panagram);   //output [
//     'The',   'brown',
//     'dog',   'fox',
//     'jumps', 'lazy',
//     'over',  'quick',
//     'the'
//   ]

// Sort the numbers in ascending order

// nums.sort((a,b)=> a - b);
// console.log(nums) // output
// [git 
//     0, 1, 2, 3, 4,
//     5, 6, 7, 8, 9,
//    10
//  ]

// Sort the numbers in descending order
 
// nums.sort((a,b) => b - a); 
// console.log(nums)  // output
// [
//   10, 9, 8, 7, 6,
//   5, 4, 3, 2, 1,
//   0
// ]

// Sort the words in ascending order

// const ascSort = panagram.sort((a,b) => a.length - b.length);
// console.log(panagram) // output
// [
//   'The',   'fox',
//   'the',   'dog',
//   'over',  'lazy',
//   'quick', 'brown',
//   'jumps'
// ]

// Sort the words in descending order

// const descSort = panagram.sort((a,b) => b.length - a.length);
// console.log(panagram) // output
// [
//   'quick', 'brown',
//   'jumps', 'over',
//   'lazy',  'The',
//   'fox',   'the',
//   'dog'
// ]

// -------------------------------------------
// Array Methods Challenge Problems
//  isPanagram
//  Using the following array - test whether each letter a-z (case insensitive) is used at least once
 
 const panagram = ['The', 'quick','brown','fox', 'jumps', 'over', 'the', 'lazy', 'dog'];

function getMaxCount(string) {
    const histogram = {};
    let foo=string.toLowerCase();
    for(let i = 0; i<foo.length; i++){
        const char = foo[i];
        if (!histogram[char]) {
          histogram[char] = 0;
        }
        histogram[char]++;
    }
    return histogram;
} 

console.log(getMaxCount("The quick brown fox jumps over the lazy dog")); ////+++++++++Code Not Working???

//----------------------------------------------------------------
// Working with Data
// filter for products with a price that is less than 10, using the array below:
// sort alphabetically by product name

// const products = [
//       {
//         "name": "allen wrench",
//         "price": 2.99,
//         "description": "handy tool"
//       },
//       {
//         "name": "cornucopia",
//         "price": 5.99,
//         "description": "festive holiday decoration"
//       },
//       {
//         "name": "banana",
//         "price": 0.99,
//         "description": "full of potassium"
//       },
//       {
//         "name": "guillotine (cigar)",
//         "price": 10.59,
//         "description": "behead your stub"
//       },
//       {
//         "name": "jack-o-lantern",
//         "price": 3.99,
//         "description": "spooky seasonal fun"
//       },
//       {
//         "name": "doggie treat (box)",
//         "price": 5.99,
//         "description": "fido loves 'em"
//       },
//       {
//         "name": "egg separator",
//         "price": 3.99,
//         "description": "it separates yolks from whites"
//       },
//       {
//         "name": "LED lightbulb",
//         "price": 6.55,
//         "description": "It's super-efficient!"
//       },
//       {
//         "name": "owl pellets",
//         "price": 3.99,
//         "description": "Don't ask what they used to be."
//       },
//       {
//         "name": "flag",
//         "price": 5.99,
//         "description": "catches the breeze"
//       },
//       {
//         "name": "hair brush",
//         "price": 6.99,
//         "description": "fine boar bristles"
//       },
//       {
//         "name": "iridium (one gram)",
//         "price": 19.36,
//         "description": "corrosion-resistant metal"
//       },
//       {
//         "name": "quark",
//         "price": 0.01,
//         "description": "Very small"
//       },
//       {
//         "name": "turtleneck",
//         "price": 19.99,
//         "description": "available in black and slightly-darker black"
//       },
//       {
//         "name": "kaleidoscope",
//         "price": 8.25,
//         "description": "tube with moving plastic pieces inside"
//       },
//       {
//         "name": "mitt (leather)",
//         "price": 15,
//         "description": "regulation sized"
//       },
//       {
//         "name": "nothing",
//         "price": 10,
//         "description": "Hey, if you pay us, we won't ask any questions."
//       },
//       {
//         "name": "violin",
//         "price": 2000,
//         "description": "Talk about a JS fiddle..."
//       },
//       {
//         "name": "yoyo",
//         "price": 1,
//         "description": "We had to pull some strings to get this one in."
//       },
//       {
//         "name": "pincushion",
//         "price": 1.99,
//         "description": "You'll get 'stuck' on it"
//       },
//     ]

    // const productsUnderTen = products.filter(product => product.price < 10.00); 
    // console.log(productsUnderTen); // this works!

//     console.log(products.sort((a,b)=>a.name.localeCompare(b.name)))