// object creation

// let obj = new Object();
// let obj = {};

//create object

// function User(first, last) {
//     this.first = first;
//     this.last = last;
// }

// let user = new User("vinod", "vakadu");
// console.log(user);

// let user = {
//     first: 'vinod',
//     last: 'vakadu'
// }
// console.log(user);


//accessing objects
// const user = {
//     name: "Talha",
//     age: 26,
//     marks: {
//         math: 20,
//         eng:30
//     }
// };
// console.log(user.name);
// console.log(user[marks][math]);

// Get Values and keys from an Object
// const user1 = {
//     age: 26,
//     mobile: 8801967402131,
//     name: "Talha"
// };
// console.log(Object.values(user1));
// console.log(Object.keys(user1));

// Object To Array Entries
// const user1 = {
//     age: 26,
//     mobile: 8801967402131,
//     name: "Talha"
// };
// console.log(Object.entries(user1));
// returns array of key, value pairs

// Merging Object with Spread
// const user1 = {
//     age: 26,
//     mobile: 8801967402131,
//     name: "Talha"
// };

// const user2 = {
//     ...user1,
//     location: 'vakadu'
// };

// console.log(user2, user1);

// Combining Two Object

// const user1 = {
//     age: 26,
//     mobile: 8801967402131,
//     name: "Talha"
// };

// const user2 = {
//     location: 'vakadu'
// };
// let obj = Object.assign({}, user2, user1);
// console.log(obj, user2, user1);

// Freezing An Object
// const user1 = {
//     age: 26,
//     mobile: 1993,
//     name: "Talha"
// }
// Object.freeze(user1);
// user1.name = 'Abu';
// console.log(user1.name)

