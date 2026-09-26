const palindromes = function (string) {

    const special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "[", "]", "{", "}", ":", ";", "'", '"', "/", "?", ".", ">", ",", "<", " "]
    let sanitizedString = string.toLowerCase().split('')
    let reversedString
    // Sanitize the original word [string]
    for (let i = sanitizedString.length - 1; i >= 0; i--) {
        for (let y = 0; y < special.length; y++) {
            if (sanitizedString[i] === special[y]) {
                sanitizedString.splice(i, 1)
            }
        }
    }
    sanitizedString = sanitizedString.join('')
    reversedString = sanitizedString.split('').reverse().join('')
    console.log(reversedString);
    console.log(sanitizedString)
    
    return sanitizedString === reversedString
  
};

// Do not edit below this line
module.exports = palindromes;
