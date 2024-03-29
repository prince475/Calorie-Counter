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

// Using regex to do the operation above

function cleanInputString(str) {
  const regex = /[+-\s]/g;
  return str.replace(regex, '');
}

// Catching e in number inputs using regex
function isInvalidInput(str) {
  const regex = /\d+e\d+/i;
  return str.match(regex);
}

// Allowing users to add entry function
function addEntry() {
  const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);
  const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length + 1;
  const HTMLString = `
   <label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
   <input type="text" placeholder="Name" id="${entryDropdown.value}-${entryNumber}-name"></input>
   <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
   <input type="number" min="0"  id="${entryDropdown.value}-${entryNumber}-calories" placeholder="Calories" />
  `;
  targetInputContainer.insertAdjacentHTML("beforeend", HTMLString);
  addEntryButton.addEventListener("click", addEntry);
}

// Getting the values the user has added
function calculateCalories(e) {
  e.preventDefault();
  isError = false;
  let breakfastNumberInputs = document.querySelectorAll('#breakfast input[type=number]')
}

// Getting our inputs
function getCaloriesFromInputs(list) {
  let calories = 0;
  for (const item of list) {
    const currVal = cleanInputString(item.value);
    const invalidInputMatch = isInvalidInput(currVal);

    if (invalidInputMatch) {
      alert(`Invalid Input: ${invalidInputMatch[0]}`)
      isError = true;
      return null;
    }
    calories += Number(currVal)
  }
  return calories
}

// Calculating calories based on user input.
function calculateCalories(e) {
  e.preventDefault()
  isError = false;
 }
