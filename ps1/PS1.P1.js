//ps1 problem 1
// function that takes a string as an input -> returns a new string that is in reverse alphabetical order
// ignore punctuation and numbers

//using fat arrow notation and chaining
const reverseAlph = (input) => input.split('').sort().reverse().join('');

module.exports = {reverseAlph}; //make the function visible