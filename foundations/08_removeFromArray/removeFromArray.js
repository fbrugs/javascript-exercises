const removeFromArray = function(array, ...remove) {

    let newArray = [];

    function duplicate(item, removeitems) {
        let found = false;

        for (const rem in removeitems) {
            if (removeitems[rem] === item) {
                found = true
            }
        }
        return found
    }


    for (let i = 0; i < array.length; i++) {
        if (!duplicate(array[i], remove)) {
            newArray.push(array[i])
        }
    }
    
    return newArray

};


// Do not edit below this line
module.exports = removeFromArray;
