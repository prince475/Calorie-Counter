// Accessing our HTML elements by their Id's or classes
const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');

// Declaring an error variable and setting it's value to boolean
let isError = false; 

// Creating our stinrg clean up function to clean the input string value received and ensure we have a number.
// Since we want receive a number from our set input

// function cleanInputString(str) {
//   const strArray = str.split('');
//   const cleanStrArray = [];
//   for (let i = 0; i < strArray.length; i++) {
//     if (!["+", "-", " "].includes(strArray[i])) {
//       cleanStrArray.push(strArray[i]);
//     }
//   }
// }

// using regex to do the operation above

function cleanInputString(str) {
  const regex = /[+-\s]/g;
  return str.replace(regex, '');
}

// catching e in number inputs using regex
function isInvalidInput(str) {
  const regex = /\d+e\d+/i;
  return str.match(regex);
}
