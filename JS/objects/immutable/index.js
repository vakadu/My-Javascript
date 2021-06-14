// Something that cant be changed
//replacing old values with new values

let person = {
	firstName: "Bob",
	lastName: "Loblaw",
	address: {
		street: "123 Fake St",
		city: "Emberton",
		state: "NJ"
	}
};

// function giveSpecialPower(person){
//     // let newPerson = Object.assign({}, person, {
//     //     specialPower: "Invisible"
//     // });
//     // return newPerson;


//     let newPerson = {
//         ...person,
//         specialPower: "Invisible"
//     }
//     return newPerson;

// }

// let newPerson = giveSpecialPower(person);

// console.log(person === newPerson);

// function giveSpecialPower(person){
//     person.specialPower = "Invisible";
//     return person;
// };

// console.log(person);

// let samePerson = giveSpecialPower(person);

// console.log(person, samePerson);
// console.log(person === samePerson);



let crayon = {
    color: 'red'
};

crayon.color = 'blue';

let crayon2 = crayon;

crayon2.color = 'green';

console.log(crayon === crayon2, crayon2, crayon);
