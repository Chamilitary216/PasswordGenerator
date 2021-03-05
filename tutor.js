// Assignment Code
//This is just random code tutor did with me to help with assignment.

var generateBtn = document.querySelector("#generate");

function generatePassword(){
    console.log("This function exists now")
    var passwordLength = prompt("How long would you like your password?");

    console.log(passwordLength);

    if(passwordLength < 8){
        alert("Your password needs to be more than 8 characters");
        return;
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