var abcUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   var abcUpperArr = abcUpper.split("");
   var abcLower = "abcdefghijklmnopqrstuvwxyz";
   var abcLowerArr = abcLower.split("");
   var num = "0123456789";
   var numArr = num.split("");
   var sym = "!#$%&\()*+,-./:;<=>?@^[\\]^_`{|}~";
   var symArr = sym.split("");


function generatePass(){
    var allChars = [];
    var resultPass = "";

// create variables

    var Totlength = prompt("How many characters would you like your password to be? (Note: Must be between 8-128 characters");

    if(Totlength <8 || Totlength > 128){
        alert("It is recommended to have a password between 8 and 128 characters long!\nPlease start over.");
    }

// This is setting conditions if/else statements
    
    else{
        if(confirm("Do you want to include uppercase letters?")){
            Array.prototype.push.apply(allChars, abcUpperArr);
        }

        if(confirm("Do you want to include lowercase letters?")){
            Array.prototype.push.apply(allChars, abcLowerArr);
        }

        if(confirm("Do you want to include numbers?")){
            Array.prototype.push.apply(allChars, numArr);
        }

        if(confirm("Do you want to include special charactrs??")){
            Array.prototype.push.apply(allChars, symArr);
        }

        if(allChars.length===0){
            alert("You must select at lease 1 type of characters to generate a password!\nPlease start over.");
        }

        else{
            for(var i=0; i<Totlength; i++){
                var random = Math.floor(Math.random()*allChars.length);
                resultPass += allChars[random];
            }
        }
        }

// Display the result in the text field

        document.getElementById("password").innerHTML = resultPass;
   }

//Copy to Clipboard

function copyPass(){

    document.querySelector("textarea").select();
    document.execCommand("Copy");
    alert("Password copied to clipboard!");
}

// Made onclick listener on the buttons in html file.
// generateBtn.addEventListener("click", writePassword);