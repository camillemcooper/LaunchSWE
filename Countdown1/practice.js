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

const addBook = (title, author) => {
  bookList.push({ title, author });
};

const rmBook = (title) => {
  bookList.splice(bookList.indexOf(title), 1);
};

const lsBooks = (ta) => {
  bookList.forEach(function (item) {
    console.log(ta === "title" ? item.title : item.author);
  });
};

addBook("Coding", "Some Guy");
console.log(bookList);
console.log("---------");
rmBook("Coding");
lsBooks("title");
console.log("---------");
lsBooks("author");

/* (4) Write a one-line arrow function that takes in a number and returns a string stating whether the
  number is positive or negative using a ternary operator (assume the number will never be zero) */

const pos = (num) => {
  return num > 0 ? "Positive!" : "Negative!";
};

console.log(pos(-1));

/* (5) Write a switch statement for a 'day' variable that prints out something based off of what day of
  the week it is
  i.e. if it's Monday, print "good luck" or wednesday print "hump day" or friday print "party" */

let day = "Saturday";

switch (day) {
  case "Monday":
    console.log("so much work...");
    break;
  case "Tuesday":
    console.log("less work!");
    break;
  case "Wednesday":
    console.log("no work to do c:");
    break;
  case "Thursday":
    console.log("Studying for exam");
    break;
  case "Friday":
    console.log("exam day !");
    break;
  case "Saturday":
    console.log("time to do the lab");
    break;
  case "Sunday":
    console.log("catching up on work");
    break;
  case "default":
    console.log("huh????");
    break;
}
/* (6) Write an arrow function that takes in a number, and uses a for loop to return the sum of every
  number from 1 up to that number
  ex. sumUp(7) = 28 */

const sumUp = (num) => {
  let count = 0;
  for (let i = 1; i <= num; i++) count += i;
  return count;
};

console.log("sumUp(7) = " + sumUp(7));

/* (7) Write an arrow function that converts the temperature from Celsius to Fahrenheit and then tells
  me what I should wear accordingly */

const toF = (celsius) => {
  fahrenheit = celsius * (9 / 5) + 32;
  return fahrenheit > 60 ? "Dress Light, it is warm!" : "Grab a sweater!";
};

console.log(toF(53.6));
console.log(toF(10));

/* (8) Write a function that takes in an array and prints out the amount of truthy values in that array
  using .forEach() */

const exampleArray = ["Hello, world!", 8, null, false, "", "0", -22];

const truthy = (arr) => {
  let count = 0;
  arr.forEach((element) => (element ? count++ : (count += 0)));
  return count;
};

console.log(truthy(exampleArray));

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

const nameGPA = () => {
  return attendance.map((element) => {
    const fullName = element.firstName + " " + element.lastName;
    let averageGrade;
    if (element.gpa >= 3.5) averageGrade = "A";
    else if (element.gpa > 3.0) averageGrade = "B";
    else if (element.gpa > 2.0) averageGrade = "C";
    else averageGrade = "D";

    return { fullName, averageGrade };
  });
};

console.log(nameGPA());
/* (10) Write a function that solves the "every number eventually equals 4" puzzle. The output should be
  an array of the path you took to make it equal four
  ex/ [11, 6, 3, 5, 4], [19, 8, 5, 4] or [252, 18, 8, 5, 4]
  For context: https://puzzling.stackexchange.com/questions/29137/every-number-eventually-equals-4 */

//Source for toWords: https://ourcodeworld.com/articles/read/353/how-to-convert-numbers-to-words-number-spelling-in-javascript
var number = require("number-to-words");

console.log(number.toWords(11));

const toFour = (x) => {
  let tempArray = [x];

  while (number.toWords(x) != "four") {
    tempArray.push(number.toWords(x).length);
    x = number.toWords(x).length;
  }

  return tempArray;
};

console.log(toFour(11));
console.log(toFour(99));
