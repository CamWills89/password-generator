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

//variables declaration of character length, uppercase, lowercase, numeric and special characters values.
var acceptCharacterAmount = "";
var acceptUppercase;
var acceptLowercase;
var acceptNumeric;
var acceptSpecialChar;

var uppercase = characterLooper(65, 90);
console.log(uppercase);

var lowercase = characterLooper(97, 122);
console.log(lowercase);

var numbers = characterLooper(48, 57);
console.log(numbers);

//There are more special characters, but they don't line up sequentially?
//I could add them like this var specialCharacters = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"]; 
//but then I dont use my fancy function?
var specialCharacters = characterLooper(33, 47) + characterLooper(58, 64) + characterLooper(91, 96) + characterLooper(123, 126);
console.log(specialCharacters);

//this will loop through an array of each variable from low to high of the ASCII code characters.
function characterLooper(low, high) {
  var characterLoop = [];
  for(let i = low; i <= high; i++){
    characterLoop.push(i);
  }
  return characterLoop;
}
// debugger;

var generatePassword = function() {
  
  acceptCharacterAmount = parseInt(acceptCharacterAmount);
  
  var acceptCharacterAmount = parseInt(prompt("How long would you like your password to be? Please select between 8 and 128."));

  if (!acceptCharacterAmount) {
      alert("You need to provide a valid answer, please try again!")
      var acceptCharacterAmount = parseInt(prompt("Please select between 8 and 128."));
    } 
    if (acceptCharacterAmount < 8 || acceptCharacterAmount > 128) {
      alert("You need to provide a valid answer, please try again!");
      var acceptCharacterAmount = parseInt(prompt("Please select between 8 and 128."));
    } 
    if (acceptCharacterAmount) {
      acceptUppercase = confirm("Would you like to add Uppercase characters?");
      acceptLowercase = confirm("would you like to add Lowercase characters?");
      acceptNumeric = confirm("Would you like to add Numbers?");
      acceptSpecialChar = confirm("Would you like to add Special characters?");
    } 
    if (!acceptUppercase && !acceptLowercase && !acceptNumeric && !acceptSpecialChar) {
      alert("You must choose at least one criteria!");
   } 
};
  

  
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

// writePassword();