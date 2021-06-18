// Something that cant be changed
//replacing old values with new values

// let person = {
// 	firstName: "Bob",
// 	lastName: "Loblaw",
// 	address: {
// 		street: "123 Fake St",
// 		city: "Emberton",
// 		state: "NJ"
// 	}
// };

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



// let crayon = {
//     color: 'red'
// };

// crayon.color = 'blue';

// let crayon2 = crayon;

// crayon2.color = 'green';

// console.log(crayon === crayon2, crayon2, crayon);


//SPREAD OPERATOR

// let nums = [1,2,3];
// let num = [...nums];
// console.log(num === nums);

// let person = {
// 	name: "Liz",
// 	age: 32
// }

// let newPerson = {...person};
// console.log(person === newPerson)

// let company = {
// 	name: "Foo Corp",
// 	people: [
// 	  {name: "Joe"},
// 	  {name: "Alice"}
// 	]
// };
// let newCompany = {...company};
// console.log(newCompany === company);
// console.log(newCompany.people === company.people)

// let liz = {
// 	name: "Liz",
// 	age: 32,
// 	location: {
// 	  city: "Portland",
// 	  state: "Oregon"
// 	},
// 	pets: [
// 	  {type: "cat", name: "Redux"}
// 	]
// }

// let newLiz = {
// 	...liz,
// 	age: 33
// }
// console.log(newLiz);


// function reducer(state, action) {
// 	/*
// 	  State looks like:
  
// 	  state = {
// 		clicks: 0,
// 		count: 0
// 	  }
// 	*/
  
// 	return {
// 	  ...state,
// 	  clicks: state.clicks + 1,
// 	  count: state.count - 1
// 	}
//   }


// function reducer(state, action) {
// 	/*
// 	  State looks like:
  
// 	  state = {
// 		house: {
// 		  name: "Ravenclaw",
// 		  points: 17
// 		}
// 	  }
// 	*/
  
// 	// Two points for Ravenclaw
// 	return {
// 	  ...state, // copy the state (level 0)
// 	  house: {
// 		...state.house, // copy the nested object (level 1)
// 		points: state.house.points + 2
// 	  }
// 	}


// function reducer(state, action) {
// 	/*
// 	  State looks like:
  
// 	  state = {
// 		school: {
// 		  name: "Hogwarts",
// 		  house: {
// 			name: "Ravenclaw",
// 			points: 17
// 		  }
// 		}
// 	  }
// 	*/
  
// 	// Two points for Ravenclaw
// 	return {
// 	  ...state, // copy the state (level 0)
// 	  school: {
// 		...state.school, // copy level 1
// 		house: {         // replace state.school.house...
// 		  ...state.school.house, // copy existing house properties
// 		  points: state.school.house.points + 2  // change a property
// 		}
// 	  }
// 	}

// Redux: Updating an Object by Key
// function reducer(state, action) {
// 	/*
// 	  State looks like:
  
// 	  const state = {
// 		houses: {
// 		  gryffindor: {
// 			points: 15
// 		  },
// 		  ravenclaw: {
// 			points: 18
// 		  },
// 		  hufflepuff: {
// 			points: 7
// 		  },
// 		  slytherin: {
// 			points: 5
// 		  }
// 		}
// 	  }
// 	*/
  
// 	// Add 3 points to Ravenclaw,
// 	// when the name is stored in a variable
// 	const key = "ravenclaw";
// 	return {
// 	  ...state, // copy state
// 	  houses: {
// 		...state.houses, // copy houses
// 		[key]: {  // update one specific house (using Computed Property syntax)
// 		  ...state.houses[key],  // copy that specific house's properties
// 		  points: state.houses[key].points + 3   // update its `points` property
// 		}
// 	  }
// 	}

// Redux: Prepend an item to an array
// function reducer(state, action) {
// 	/*
// 	  State looks like:
  
// 	  state = [1, 2, 3];
// 	*/
  
// 	const newItem = 0;
// 	return [    // a new array
// 	  newItem,  // add the new item first
// 	  ...state  // then explode the old state at the end
// 	];
// }

// Redux: Add an item to an array
// function reducer(state, action) {
// 	/*
// 	  State looks like:
  
// 	  state = [1, 2, 3];
// 	*/
  
// 	const newItem = 0;
// 	return [    // a new array
// 		...state, // explode the old state first
// 		newItem   // then add the new item at the end	
// 	];
// }

// function reducer(state, action) {
// 	const newItem = 0;
// 	const newState = state.slice();
  
// 	newState.push(newItem);
// 	return newState;

// Redux: Update an item in an array with map
// function reducer(state, action) {
// 	/*
// 	  State looks like:
  
// 	  state = [1, 2, "X", 4];
// 	*/
  
// 	return state.map((item, index) => {
// 	  // Replace "X" with 3
// 	  // alternatively: you could look for a specific index
// 	  if(item === "X") {
// 		return 3;
// 	  }
  
// 	  // Leave every other item unchanged
// 	  return item;
// 	});
//   }


// Redux: Update an object in an array
// function reducer(state, action) {
// 	/*
// 	  State looks like:
  
// 	  state = [
// 		{
// 		  id: 1,
// 		  email: 'jen@reynholmindustries.com'
// 		},
// 		{
// 		  id: 2,
// 		  email: 'peter@initech.com'
// 		}
// 	  ]
  
// 	  Action contains the new info:
  
// 	  action = {
// 		type: "UPDATE_EMAIL"
// 		payload: {
// 		  userId: 2,  // Peter's ID
// 		  newEmail: 'peter@construction.co'
// 		}
// 	  }
// 	*/
  
// 	return state.map((item, index) => {
// 	  // Find the item with the matching id
// 	  if(item.id === action.payload.userId) {
// 		// Return a new object
// 		return {
// 		  ...item,  // copy the existing item
// 		  email: action.payload.newEmail  // replace the email addr
// 		}
// 	  }
  
// 	  // Leave every other item unchanged
// 	  return item;
// 	});
//   }

// Redux: Insert an item in the middle of an array
