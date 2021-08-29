// Assignment Code
var generateBtn = document.querySelector("#generate");



// variables for all possible character selections
var lowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numericChars = ['0', '1', '2', '4', '5', '6', '7', '8', '9'];
var specialChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];


// functions for random character out of each array
function getRandom(max) {
  return (Math.floor(Math.random() * max))
};

// funtion to shuffle order of array
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

// function to generate password
function generatePassword() {
  
  // ask user to confirm character length
  var passwordLength = window.prompt("How long would you like your password to be? Pick a number between 8 and 128.");
  
  // if the user enters a number more than 128, less than 8 or nothing at all an alert will tell them to pick a valid number
  while (passwordLength > 128 || passwordLength < 8 || passwordLength === null) {
    window.alert("Please enter a valid character number.");
    // the function will start over to allow user to enter a valid option
    generatePassword();
  }
  
  // take the input from passwordLength and turn it into an integer
  passwordLength = parseInt(passwordLength);
  
  // ask user preferences with confirm
  var upperCaseConfirm = window.confirm("Would you like upper case letters?");
  var lowerCaseConfirm = window.confirm("Would you like lower case letters?");
  var numericConfirm = window.confirm("Would you like numbers?");
  var specialCharacters = window.confirm("Would you like to add special characters?");
  
  // empty array to hold randomized characters from selectedChars
  var endPassword = [];
  

  while (endPassword.length < passwordLength) {
    if (upperCaseConfirm && endPassword.length < passwordLength) {
      passwordUpper = getRandom(upperCaseLetters.length)
      endPassword.push(upperCaseLetters[passwordUpper]);
    }
    if (lowerCaseConfirm && endPassword.length < passwordLength) {
      passwordLower = getRandom(lowerCaseLetters.length)
      endPassword.push(lowerCaseLetters[passwordLower]);
    }
    if (numericConfirm && endPassword.length < passwordLength) {
      passwordInteger = getRandom(numericChars.length);
      endPassword.push(numericChars[passwordInteger])
    }
    if (specialCharacters && endPassword.length < passwordLength) {
      passwordSpecial = getRandom(specialChars.length);
      endPassword.push(specialChars[passwordSpecial])
    }
  };
  shuffle(endPassword);
  endPassword = endPassword.join("");
  return endPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);