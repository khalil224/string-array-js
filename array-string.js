function megaFriend(friends) {
    if (Array.isArray(friends) == false) {
        return 'Please provide an array';
    }
    let mega = friends[0];
    for (const friend of friends) {
        if (friend.length > mega.length) {
            mega = friend;
        }
    }
    return mega;
}
const friends = ['kutub', 'ruhul', 'moin'];
const myBigBuddy = megaFriend(1234);
//console.log(myBigBuddy);
/* if (friends.indexOf('lion') != -1) {
    console.log('Lion exists');
}
else {
    console.log('Lion does not exists');
} */
if (friends.includes('lion')) {
    console.log('lion exist')
}
else {
    console.log('lion does not exist');
}
//concat
const first = [1, 3, 4];
const second = [4, 5, 6, 7];
const combined = first.concat(second);
console.log(combined);