// Only change code below this line
var sum = 0;
function addThree(num) {
    return (sum + num);
}
var sum = addThree(3);

function addFive(num) {
    return (addThree + num);

}
addFive(5);

// Only change code above this line
module.exports = {
    addThree,
    addFive
};


