// Only change code below this line
var sum = 0;
function addThree(num) {
    sum = sum + num;
}
addThree(3);
function addFive() {
addFive = sum + 5;
return addFive;
}
addFive();
addThree();
// Only change code above this line
module.exports = {
    addThree,
    addFive
};


