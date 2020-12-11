// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseChar = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "0123456789";
var sym = "!@#$%^&*_+";
var numberCheck;
var passwordLength;
var uppercaseCheck;
var specialCheck;
var lowercaseCheck;



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
}
return passwordLength;
}

//Used to see if numbers will be allowed in password
function determineNumbers(){
  numberCheck = prompt("Would you like to include numbers in your password? (Yes or No)");
  numberCheck = numberCheck.toLowerCase();

  if (numberCheck === null || numberCheck === ""){
    alert("Answer either Yes or No");
    determineNumbers

  }else if (numberCheck ==="no" || numberCheck ==="n"){
    numberCheck = false;
    return numberCheck;

  }else if (numberCheck ==="yes" || numberCheck ==="y"){
    numberCheck = true;
  }
  return numberCheck;
}

//Used to determine if Uppercase Letters will be used
function determineUppercase () {
  uppercaseCheck = prompt ("Would you like to use Uppercase Letters? (Yes or No");
  uppercaseCheck = uppercaseCheck.toLowerCase();

  if (uppercaseCheck === null || uppercaseCheck === ""){
    alert ("Answer Yes or No")
  }
  
}




//Used to see if special characters will be allowed in password
function determineSpecial(){
  specialCheck = prompt ("Would you like to include Special Characters? (Yes or No)");
  spefialCheck = specialCheck.toLowerCase;
}
  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  if (specialCheck === null || specialCheck === "") {
    alert ("Yes or No?");
    determineSpecial;

  }else if (specialCheck === "yes" || specialCheck ==="y"){
    specialCheck =true;
    return specialCheck;

  }else if (specialCheck === "no" || specialCheck ==="n"){
    specialCheck = false;
    return specialCheck;

  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
