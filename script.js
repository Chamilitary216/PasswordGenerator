// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseChar = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "0123456789"
var sym = "!@#$%^&*_+"
var numberCheck;
var passwordLength;
var uppercaseCheck;
var specialCheck



//Used to figure out length of password
function determineLength() {
  passwordLength = prompt("How many characters would you like your password to be? (Note: Must be between 8-128 characters)");

  if (passwordLength< 8) {
    alert("Password length must be a number between 8-128 characters");
    determineLength();

  }
  
  else if (passwordLength>128){
  alert("Password length must be a number between 8-128 characters");
  determineLength();
}else if (isNaN(passwordLength)){
  alert("Password length must be a number between 8-128 characters");
  determineLength();
return passwordLength;
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
