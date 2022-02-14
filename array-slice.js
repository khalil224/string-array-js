const numbers = [3, 65, 7, 64, 45, 3, 434, 34, 54, 45, 34];
const numberSliced = numbers.slice(4, 8);
//console.log(numberSliced);

//splice to remove an element from an array
const numberSpliced = numbers.splice(4, 3);
//console.log(numberSpliced);

//
const numberSpliced2 = numbers.splice(4, 3, 55, 56, 67, 77);
console.log(numberSpliced2);
console.log(numbers);