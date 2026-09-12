const removeFromArray = function(array, remove) {
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] === remove) {
            array.splice(i, 1);
        }
    }
    return array
};


let x = ['hello', 'my', 'name', 'is', 'fabian']

removeFromArray(x, 'test');

// Do not edit below this line
module.exports = removeFromArray;
