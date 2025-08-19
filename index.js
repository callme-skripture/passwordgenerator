let result = document.getElementById("result");

let lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
let uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numberChars = "0123456789";
let symbolChars = "!@#$%^&*()_+'?/";

let randomIndex;

function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols){

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    for(let i = 0; i < length; i++){
        randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    result.textContent = password;

}

generatePassword(12, true, true, true, true);