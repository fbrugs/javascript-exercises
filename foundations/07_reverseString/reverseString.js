const reverseString = function(inp) {
     let stringArray = inp.split("");
     let reverseString = stringArray.reverse();
     let finalString = '';

     for (let i = 0; i < reverseString.length; i++) {
        finalString += reverseString[i];
     }
     
     return finalString;
     
};


reverseString("hello");
// Do not edit below this line
module.exports = reverseString;
