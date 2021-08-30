 // Assignment Code
var generateBtn = document.querySelector("#generate");

// const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const numbers = "1234567890";
// const symbols = "!@#$%^&*_-+=";
  const lower = "abcdefghjiklmnopqrstuvwyz";
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const specials = "!@#$%^&*_-+=";
  const number = "0123456789";



function generatePassword(chars,len) {
  retVal = "";

  for (var i = 0, n = len; i < len; ++i) {
    retVal += chars.charAt(Math.floor(Math.random() * n));
  }
  console.log("RretVal is ",retVal)
  return retVal;

}


// Write password to the #password input
function writePassword() { 
  var passwordChars;
  passwordChars = '';
 var length = prompt("Choose a password length between 8-128 characters");
  if (length > 128 || length < 8) { 
     var length = promt("Please enter a number between 8-128");
  }
 console.log(length);

  var lowercase = confirm("Would you like to include lowercase letters?");
  if (lowercase == true) {
    passwordChars = passwordChars.concat(lower)
  }
  console.log(lowercase);
  
  var uppercase = confirm("Would you like to include UPPERCASE letters?");
  if (uppercase == true) {
    passwordChars = passwordChars.concat(upper)
  }  
  console.log(uppercase);
  var special = confirm("Do you want to include special characters?");
  if (special == true) {
    passwordChars = passwordChars.concat(specials)
  }
  console.log(special);
  var numbers = confirm("Do you want to include numbers?");
  if (numbers == true) {
    passwordChars = passwordChars.concat(number)
  }
  console.log(numbers);

  console.log(passwordChars)
  var password = generatePassword(passwordChars,length);
  console.log("password is ",password)

  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 





