// Only change code below this line
function randomRangeNumber(minNumber, maxNumber) {
    
    return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
}
var myNumber = randomRangeNumber(5, 15);
console.log(randomRangeNumber(15, 20));


// Only change code above this line
module.exports = randomRangeNumber;