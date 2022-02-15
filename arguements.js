function addNumbers(num1, num2) {
    let sum = 0;
    for (const num of arguments) {
        sum = sum + num;
    }
    //const result = num1 + num2;
    return sum;
}
const sum = addNumbers(23, 13, 23, 34, 454, 34, 9);
//console.log(sum);

//
function getFullName(firstName, lastName) {
    let fullName = '';
    for (const part of arguments) {
        fullName = fullName + part + ' ';
    }
    return fullName;

}
const name = getFullName('hanif', 'nahif', 'fahim', 'famidul');
//console.log(name);