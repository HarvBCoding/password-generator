// Assignment Code
var generateBtn = document.querySelector("#generate");



// variables for all possible character selections
var lowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numericChars = ['0', '1', '2', '4', '5', '6', '7', '8', '9'];
var specialChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];


// functions for random character out of each array
var randomLowerCase = Math.floor(Math.random() * lowerCaseLetters.length);
var randomUpperCase = Math.floor(Math.random() * upperCaseLetters.length);
var randomNumeric = Math.floor(Math.random() * numericChars.length);
var randomSpecial = Math.floor(Math.random() * specialChars.length);


// function to generate password
function generatePassword() {
  // ask user to confirm character length
  var passwordLength = window.prompt("How long would you like your password to be? Pick a number between 8 and 128.");
  while (passwordLength > 128 || passwordLength < 8 || passwordLength === null) {
    window.alert("Please enter a valid character number.");
    generatePassword();
    return passwordLength;
  }
  var upperCaseConfirm = window.confirm("Would you like upper case letters?");
  var lowerCaseConfirm = window.confirm("Would you like lower case letters?");
  var numericConfirm = window.confirm("Would you like numbers?");
  var specialCharacters = window.confirm("Would you like to add special characters?");
// empty array to hold guranteed characters
var requiredChar = [];
// empty array to hold all other possible characters
var possibleChar = [];
// array to push 
for (let i = 0; i <= passwordLength; i++) {
  // if user confirmed they wanted upper case letters
  if (upperCaseConfirm === true) {
    // then push randomUpperCase to requiredChar array
    requiredChar.push(randomUpperCase);
  } else {
    break;
  };
  // if user confirmed they wanted upper case letters
  if (lowerCaseConfirm ===true) {
    // then push randomLowerCase to requiredChar array
    requiredChar.push(randomLowerCase);
  } else {
    break;
  };
  // if user confirms they wanted numeric characters
  if (numericConfirm ===  true) {
    // then push randomNumeric to requiredChar array
    requiredChar.push(randomNumeric);
  } else {
    break;
  };
  // if user confirms they wanted specialCharacters
  if (specialCharacters === true) {
    // then push randomSpecial to requiredChar array
    requiredChar.push(randomSpecial);
  } else {
    break;
  };
}
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
