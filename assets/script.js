// Assignment code here
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated

//PsuedoCode
// create variables that will house the prompts.
// I need to input variables that hold the amount of characters, uppercase, lowercase, numeric and special characters data.
//Also, I need to make sure that the generate password button intiates the window prompts.

// Create a function that will prompt the user to select the variables created.
// Also I need to make sure that these prompt only select specified values.
// make sure that character length prompt accepts numbers as valid input with parseInt().

// the generate password function needs to be able to loop through all of the possible selection outcomes. It should loop
// if all outcomes are true, if 3 outcomes are true, 2 outcomes are true or 1 outcome is true.

// need to us math.floor and math.random to randomize the selection characters.
// And finally I need to make sure that the password is displayed in the generator's text area.

var characterAmount = "";
var 
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

