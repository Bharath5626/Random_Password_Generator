
function passappear(){  
    function passwordgenerator(length, includeUppercase, includeLowerCase , includeNumbers , includeSymbols){
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "1234567890";
    const symbolChars = " !@#$%^&*()"; 

    let allowedChars = '';
    let password= '';
    allowedChars += includeLowerCase ? lowercaseChars : '';
    allowedChars += includeUppercase ? uppercaseChars : '';
    allowedChars += includeNumbers ? numberChars : '';
    allowedChars += includeSymbols ? symbolChars : '';
    console.log(allowedChars);
    

    if (length <= 0){
        return `(password length must be atleast one character)`
    }
    if(allowedChars.length == 0){
        return`(Length must be atleast 1)`
    }

    for(let i =0 ; i<length; i++){
        const randIndex = Math.floor(Math.random() * allowedChars.length); 
        password += allowedChars[randIndex] ;
    }
    return password; 
    
}
let result = document.getElementById('password');
const length =document.getElementById("numOfLength").value;
const includeUppercase = true;
const includeLowerCase = true;
const includeNumbers = true;
const includeSymbols = true;


 const password =passwordgenerator(length, includeUppercase, includeLowerCase , includeNumbers , includeSymbols);
 result.value = password;

 
}

function copytoclipboard(){
    const copy = document.getElementById('password');

    navigator.clipboard.writeText(copy.value).then(() =>{
        alert('Password copied to clipboard!');
    }).catch((error) =>{
        alert('Failed to copy password: ', error);
    })
}