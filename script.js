
//Event Listener to prompt questions when button pushed
document.querySelector("#generate").addEventListener("click", writePassword);

// Various Arrays 
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "/", "<", ">", "?","~"];
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Variable Declarations
var confirmLength = "";
var confirmSpecial;
var confirmNumeric;
var confirmUpperCase;
var confirmLowerCase;

// Prompt to confirm how many characters the user would like in their password. Start of generate password function.
function generatePassword() {
  var confirmLength = prompt("How many characters would you like your password to contain? \nChoose from 8 to 128 characters.");
 // Loop if answer is not valid 
while(confirmLength <= 8 || confirmLength >= 128) {
  alert("Password length must be between 8-128 characters \nTry again...");
  var confirmLength = prompt("How many characters would you like your password to contain?");
  }

// Determine parameters of password and store user input in the variables
var confirmSpecial = confirm("Click OK to confirm if you would like to include special characters");
var confirmNumeric = confirm("Click OK to confirm if you would like to include numeric characters");    
var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");
  // Loop if answer all return back as false and password can not be generated. 
while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecial === false && confirmNumeric === false) {
    alert("You must choose at least one parameter");
    var confirmSpecial = confirm("Click OK to confirm if you would like to include special characters");
    var confirmNumeric = confirm("Click OK to confirm if you would like to include numeric characters");    
    var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
    var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");   
} 
  // Assign an action to the password parameters use concat function to generate password characters
  var passwordCharacters = []
  
if (confirmSpecial) {
  passwordCharacters = passwordCharacters.concat(specialChar)
}

if (confirmNumeric) {
  passwordCharacters = passwordCharacters.concat(numbers)
}
  
if (confirmLowerCase) {
  passwordCharacters = passwordCharacters.concat(lowercaseLetters)
}

if (confirmUpperCase) {
  passwordCharacters = passwordCharacters.concat(uppercaseLetters)
}

  // console.log(passwordCharacters)

  // Empty string to be filled based on for loop selecting random characters from the array
  var randomPassword = ""
  
  for (var i = 0; i < confirmLength; i++) {
    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    console.log(randomPassword)
  }
  return randomPassword;
}

 
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
