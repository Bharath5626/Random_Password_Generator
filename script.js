function generatePassword(length, useUpper, useLower, useNumbers, useSymbols) {
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const number = "0123456789";
    const symbol = "!@#$%^&*()_+-=[]{}|;:,.<>?";

    let allowed = "";
    if (useUpper) allowed += upper;
    if (useLower) allowed += lower;
    if (useNumbers) allowed += number;
    if (useSymbols) allowed += symbol;

    if (allowed.length === 0) return "Select at least one option.";

    let password = "";
    for (let i = 0; i < length; i++) {
        const index = Math.floor(Math.random() * allowed.length);
        password += allowed[index];
    }

    return password;
}

const passwordField = document.getElementById("passwordshow");
const generateBtn = document.getElementById("generate");
const copyBtn = document.getElementById("copy");
const rangeInput = document.getElementById("lengthRange");
const lengthDisplay = document.getElementById("lengthDisplay");

rangeInput.oninput = () => {
    lengthDisplay.textContent = rangeInput.value; 
};

generateBtn.onclick = () => {
    const length = parseInt(rangeInput.value);  
    const useUpper = document.getElementById("UpperCases").checked;
    const useLower = document.getElementById("lowerCases").checked;
    const useNumbers = document.getElementById("numbers").checked;
    const useSymbols = document.getElementById("symbols").checked;

    const password = generatePassword(length, useUpper, useLower, useNumbers, useSymbols);
    passwordField.value = password;  
};

copyBtn.onclick = () => {
    if (passwordField.value === "") {
        alert("No password to copy!");
        return;
    }
    navigator.clipboard.writeText(passwordField.value)
        .then(() => alert("Password copied to clipboard!"))
        .catch(() => alert("Failed to copy password!"));
};
