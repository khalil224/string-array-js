const anthem = 'Amar Sonar Bangla Ami Tomai Valobashi';
const words = anthem.split(' ');
const withoutA = anthem.split('a');
//console.log(withoutA);

//slice 
const smallSlice = anthem.slice(5, 13);
//console.log(smallSlice);
const anotherPart = anthem.substr(11, 8);
//console.log(anotherPart);
//substring
const anotherAnotherPart = anthem.substring(11, 15);
//console.log(anotherAnotherPart);

//concat
const first = 'Amader';
const second = 'City';
//const fullString = first + second;
const fullString = first.concat(second).concat('Hello').concat('sundor');
//console.log(fullString);
//
//const words2 = ['a', 'b', 'c', 'd'];
//const allJoined = words2.join('');
const name = ['alim', 'badhon', 'sorif'];
const joinedName = name.join(' ');
console.log(joinedName);


//console.log(allJoined);
