const sumAll = function(lowNum, highNum) {
    let outcome = 0;
    let firstNum =0;
    let secNum = 0;

    if (typeof lowNum === 'number' && typeof highNum === 'number') {
        if (lowNum % 1 === 0 && highNum % 1 === 0) {
            if (lowNum > 0 && highNum > 0) {
                if (lowNum > highNum) {
                    firstNum = highNum;
                    secNum = lowNum;
                } else  {
                    firstNum = lowNum;
                    secNum = highNum;
                }

                for (let i = firstNum; i <= secNum; i++) {
                    outcome += i;
                }

                return outcome
            } else {
                return 'ERROR'
            }
        } else {
            return 'ERROR'
        }
    } else {
        return 'ERROR'
    }
};

// Do not edit below this line
module.exports = sumAll;
