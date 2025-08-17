const passwordBox = document.getElementById("password")
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXY";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789"
const symbols = "!@#$%^&*()={}[]></-"
const allChars = upperCase + lowerCase + number + symbols;

// Function to generate the random password 

function generateRandomPassword(){
    let password = "";
    // For each type of one should be there 
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while(password.length < length){
        // Now generate a random character until the password length is 12
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    // For displaying the value of the generated password into the box 
    passwordBox.value = password;
}

function copyPassword(){
    // Selecting the text 
    passwordBox.select();
    // Command to copy
    document.execCommand("copy");

}
