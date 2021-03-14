/* Do all of these using proper ES6 syntax

Using the following array of objects,
(1) Write an arrow function that adds a new entry to bookList
(2) Write an arrow function that removes a specific book from the bookList
(3) Write an arrow function that lists out all the books or all the authors in the book list */

const bookList = [
  { title: "Don Quixote", author: "Miguel de Cervantes" },
  { title: "Ulysses", author: "James Joyce" },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { title: "Moby Dick", author: "Herman Melville" },
];

// Adds an element
const addElement = (array, title, author) => array.push({'title': title, 'author': author});

// Removes an element
const removeElement = (array, title) => {
  let position = 0;
  for (let counter = 0; counter < array.length; counter++) {
    if(array[counter].title === title) {
      position = counter;
      break;
    }
  }
  if (position > -1) {
    array.splice(position, 1);
  }
}

// Lists all the elements
const listAll = (array, title, author) => {
  for (let counter = 0; counter < array.length; counter++) {
    console.log('Book Title: ' + array[counter].title + ' Book Author: ' + array[counter].author);
  }
}

addElement(bookList, 'Apples', 'Cheese');
removeElement(bookList, 'Apples');
//console.log(bookList);
listAll(bookList);
// listArray();
/* (4) Write a one-line arrow function that takes in a number and returns a string stating whether the
  number is positive or negative using a ternary operator (assume the number will never be zero) */
const positivity = (x) => (x >= 0) ? true : false;
console.log(positivity(5)); 
console.log(positivity(-5));
/* (5) Write a switch statement for a 'day' variable that prints out something based off of what day of
  the week it is
  i.e. if it's Monday, print "good luck" or wednesday print "hump day" or friday print "party" */
let day = 'Monday';
switch(day) {
  case 'Monday':
    console.log('good luck');
    break;
  case 'Wednesday':
    console.log('hump day');
    break;
  case 'Friday':
    console.log('party');
    break;
  default:
    console.log('Not a valid input');
}

/* (6) Write an arrow function that takes in a number, and uses a for loop to return the sum of every
  number from 1 up to that number
  ex. sumUp(7) = 28 */
const numberSummer = (x) => {
  let answer = 0;
  for(let counter = 0; counter <= x; counter++) {
    answer = answer + counter;
  }
  return answer;
}
console.log(numberSummer(3));
/* (7) Write an arrow function that converts the temperature from Celsius to Fahrenheit and then tells
  me what I should wear accordingly */
const temperature = (x) => {
  x = x * (9/5);
  x = x + 32;
  //console.log(x);
  if (x < 60) {
    console.log('Wear warm clothes');
  } else {
    console.log('Wear nice clothes for warm temperatures');
  }
}
temperature(0);
/* (8) Write a function that takes in an array and prints out the amount of truthy values in that array
  using .forEach() */

const exampleArray = ["Hello, world!", 8, null, false, "", "0", -22];
const truthPrinter = (array) => {
  array.forEach(function(element) {
    if (element) {
      console.log('true');
    } else {
      console.log('false');
    }
  })
}
truthPrinter(exampleArray);
/* (9) Using the map function and arrow syntax, return an array of object that contain a fullName field
  and an averageGrade field representing the letter grade that corresponds to their GPA */

const attendance = [
  { firstName: "Clay", lastName: "Tondreau", gpa: 4.0 },
  { firstName: "Tucker", lastName: "Wilson", gpa: 2.0 },
  { firstName: "Eliza", lastName: "Tobin", gpa: 3.7 },
  { firstName: "Sofia", lastName: "Ackerman", gpa: 1.1 },
  { firstName: "Thomas", lastName: "Beddow", gpa: 2.3 },
  { firstName: "Jackson", lastName: "Wolf", gpa: 4.0 },
  { firstName: "Jared", lastName: "Nguyen", gpa: 4.0 },
];

const gpa = x => {
  if (x > 4.0) {
    return "Not a valid gpa";
  } else if (x === 4.0) {
    return "A"; 
  } else if (x >= 3.7 && x < 4.0) {
    return "A-"; 
  } else if (x >= 3.3 && x < 3.7) {
    return "B+"; 
  } else if (x >= 3.0 && x < 3.3) {
    return "B"; 
  } else if (x >= 2.7 && x < 3.0) {
    return "B-"; 
  } else if (x >= 2.3 && x < 2.7) {
    return "C+"; 
  } else if (x >= 2.0 && x < 2.3) {
    return "C"; 
  } else if (x >= 1.7 && x < 2.0) {
    return "C-"; 
  } else if (x >= 1.3 && x < 1.7) {
    return "D+"; 
  } else if (x >= 1 && x < 1.3) {
      return "D"; 
  } else if (x >= 0 && x < 1.0) {
    return "E";
  } else {
    return "Not a valid gpa";
  }  
}

const makeName = (first, last) => {
  return first.value + " " + last.value;
}

// https://www.digitalocean.com/community/tutorials/4-uses-of-javascripts-arraymap-you-should-know
const newAttendance = attendance.map(item => {
  const container = {}

  container.name = item.firstName + " " + item.lastName;
  container.gpa = gpa(item.gpa);
  return container;
})
console.log(newAttendance);
// /* (10) Write a function that solves the "every number eventually equals 4" puzzle. The output should be
  // an array of the path you took to make it equal four
  // ex/ [11, 6, 3, 5, 4], [19, 8, 5, 4] or [252, 18, 8, 5, 4]
  // For context: https://puzzling.stackexchange.com/questions/29137/every-number-eventually-equals-4 */

  // Have to npm install number-to-words to use this solution
  // https://ourcodeworld.com/articles/read/353/how-to-convert-numbers-to-words-number-spelling-in-javascript

const everyNumberIsFour = number => {
  const answer = [];
  for(let counter = 0; counter != 4; counter = number) {
    let word = require('number-to-words')
    // This stores the string value of the number
    let letters = word.toWords(number); 
    // Add the number to the path
    answer.push(number);
    // Replace the dashes with empty space
    // https://www.encodedna.com/javascript/replace-hyphen-in-a-string-with-space-in-javascript.htm
    letters = letters.replace(/-/g, '');
    // Set it equal to the new number
    number = letters.length;
  }
  if (number === 4) {
    answer.push(4);
    return answer;
  } else {
    return "This number could not be converted to four"
  }
}
console.log(everyNumberIsFour(74));