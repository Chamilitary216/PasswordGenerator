// Assignment Code
var generateBtn = document.querySelector("#generate");

alert("Click Generate Password to start!");

function prompt () {
  var generateBtn = prompt("jhhjgkhgkhg");
  alert (generateBtn);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
