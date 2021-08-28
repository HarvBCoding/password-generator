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
  
  // empty array to hold randomized selected characters
  var selectedChar = [];
  // empty array to hold randomized characters from selectedChars
  var endPassword = [];
  
  // for passwordLength input add letter/characters to selectedChar
  for (let i = 0; i < passwordLength; i++) {
    
    // if user confirms they would like upper case characters in their password
    if (upperCaseConfirm) {
      // add random upper case character to selectedChar
      randomUpperCase = getRandom(upperCaseLetters.length);
      selectedChar.push(upperCaseLetters[randomUpperCase])
    }; 
    
    // if user confirms they would like lower case characters in their password
    if (lowerCaseConfirm) {
      // add random lower case character to selectedChar
      randomLowerCase = getRandom(lowerCaseLetters.length);
      selectedChar.push(lowerCaseLetters[randomLowerCase]);
    };
    
    // if user confirms they would like numeric characters in their password 
    if (numericConfirm) {
      // add random numeric character to selectedChar
      randomInteger = getRandom(numericChars.length);
      selectedChar.push(numericChars[randomInteger]);
    }; 
    
    // if user confirms they would like special characters in their password
    if (specialCharacters) {
      // add random special character to selectedChar
      randomSpecial = getRandom(specialChars.length);
      selectedChar.push(specialChars[randomSpecial]);
    };
    
    // variable to randomize characters from selectedChar
    var randomSelected = getRandom(selectedChar.length);
    // a random character from the selectedChar array will be pushed to the endPassword array
    endPassword += selectedChar[randomSelected];
    debugger;
  };
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