function generatePassword(length, includeUpper, includeLower, includeNumb, includeSymb) {

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "@£$€{[]]}!";

    let allowedChars = "";
    let password = "";

   
    allowedChars += includeLower ? lowercaseChars : "";
    allowedChars += includeUpper ? uppercaseChars : "";
    allowedChars += includeNumb ? numberChars : "";
    allowedChars += includeSymb ? symbolChars : "";

    
    if (length <= 0 || isNaN(length)) {
        document.getElementById('mainHead').textContent =
            "Password Length must be at least 1!";
        return;
    }

   
    if (allowedChars.length === 0) {
        document.getElementById('mainHead').textContent =
            "Must choose at least 1 parameter!";
        return;
    }

    
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    document.getElementById('result').textContent =
        `Generated password: ${password}`;
}

document.getElementById('generateBtn').addEventListener('click', () => {

    
    const length = Number(document.getElementById('passwordLength').value);
    const includeLower = document.getElementById('lowerCase').checked;
    const includeUpper = document.getElementById('upperCase').checked;
    const includeNumb = document.getElementById('numbers').checked;
    const includeSymb = document.getElementById('symbols').checked;

    generatePassword(
        length,
        includeUpper,
        includeLower,
        includeNumb,
        includeSymb
    );
});
