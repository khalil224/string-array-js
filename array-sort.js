const numbers = [4, 7, 2, 3, 6, 5, 9];
const sortNumbers = numbers.sort();
//console.log(sortNumbers);

const friends = ['rahul', 'abdul', 'fahad', 'masum', 'karim'];
//const sortFriends = friends.sort();
//console.log(sortFriends);
//const reversedFriends = friends.reverse();
//console.log(reversedFriends);
const sortedReversedFriends = friends.sort().reverse();
//console.log(sortedReversedFriends);

//number sorting fun
const bigNumbers = [66, 58, 81, 92, 9, 6, 37, 13, 2];
const sortedBigNumbers = bigNumbers.sort(function (a, b) {
    return a - b;
});
//console.log(sortedBigNumbers);