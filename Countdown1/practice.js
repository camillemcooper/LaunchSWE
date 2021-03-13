/* Do all of these using proper ES6 syntax

Using the following array of objects,
(1) Write an arrow function that adds a new entry to bookList
(2) Write an arrow function that removes a specific book from the bookList
(3) Write an arrow function that lists out all the books or all the authors in the book list */

let bookList = [
  { title: "Don Quixote", author: "Miguel de Cervantes" },
  { title: "Ulysses", author: "James Joyce" },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { title: "Moby Dick", author: "Herman Melville" },
];

// 1
const addBook = (title, author) => bookList.push({title: title, author:author});

// 2
const removeBook = (title, author) => bookList = bookList.filter((book) => book.title != title && book.author != author);

// 3
const listBooks = (property) => bookList.forEach((book) => console.log(book[property]));

// Tests
addBook("To Kill a Mockingbird", "Harper Lee");
removeBook("Ulysses", "James Joyce");
listBooks("title");
console.log("\n");
listBooks("author");

/* (4) Write a one-line arrow function that takes in a number and returns a string stating whether the
  number is positive or negative using a ternary operator (assume the number will never be zero) */

const isPositive = (number) => number > 0 ? "The number is positive" : "The number is negative";

console.log("\n");
console.log(isPositive(1));
console.log(isPositive(-1));

/* (5) Write a switch statement for a 'day' variable that prints out something based off of what day of
  the week it is
  i.e. if it's Monday, print "good luck" or wednesday print "hump day" or friday print "party" */

dayStatement = (day) => {
  switch (day) {
    case "Monday":
      console.log("good luck");
      break;
    case "Tuesday":
      console.log("tough tuesday?");
      break;
    case "Wednesday":
      console.log("hump day!");
      break;
    case "Thursday":
      console.log("the day of Thor");
      break;
    case "Friday":
      console.log("party");
      break;
    case "Saturday":
      console.log("party again");
      break;
    case "Sunday":
      console.log("sleep in");
      break;
    default:
      console.log("that's not a day")
  }
}

console.log("\n");
dayStatement("Monday");
dayStatement("Tuesday");
dayStatement("Wednesday");
dayStatement("Thursday");
dayStatement("Friday");
dayStatement("Saturday");
dayStatement("Sunday");

/* (6) Write an arrow function that takes in a number, and uses a for loop to return the sum of every
  number from 1 up to that number
  ex. sumUp(7) = 28 */

const sumUpTo = (number) => {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
      sum += i;
  }
  return sum;
}

console.log("\n");
console.log(sumUpTo(7));
console.log(sumUpTo(0));
console.log(sumUpTo(10));

/* (7) Write an arrow function that converts the temperature from Celsius to Fahrenheit and then tells
  me what I should wear accordingly */

/* (8) Write a function that takes in an array and prints out the amount of truthy values in that array
  using .forEach() */

const exampleArray = ["Hello, world!", 8, null, false, "", "0", -22];

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

/* (10) Write a function that solves the "every number eventually equals 4" puzzle. The output should be
  an array of the path you took to make it equal four
  ex/ [11, 6, 3, 5, 4], [19, 8, 5, 4] or [252, 18, 8, 5, 4]
  For context: https://puzzling.stackexchange.com/questions/29137/every-number-eventually-equals-4 */
