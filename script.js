
//Assignment Code + Event Listener to prompt questions when button pushed
document.querySelector("#generate").addEventListener("click", writePassword);

// Various Arrays 
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "/", "<", ">", "?","~"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Variable Declaration 
var confirmLength = "";
var confirmSpecial;
var confirmNumeric;
var confirmUpperCase;
var confirmLowerCase;

// Prompt to confirm how many characters the user would like in their password. Start of generate password function.
function generatePassword() {
  var confirmLength = (prompt("How many characters would you like your password to contain? \nChoose from 8 to 128 characters."));
 // Loop if answer is not valid 
 while(confirmLength <= 8 || confirmLength >= 128) {
  alert("Password length must be between 8-128 characters Try again");
  var confirmLength = (prompt("How many characters would you like your password to contain?"));
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
console.log(confirmLength);


 
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
