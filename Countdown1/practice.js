/* Do all of these using proper ES6 syntax

Using the following array of objects,
(1) Write an arrow function that adds a new entry to bookList
(2) Write an arrow function that removes a specific book from the bookList
(3) Write an arrow function that lists out all the books or all the authors in the book list */
const addNewEntry = (title, author) => bookList.push({title: title, author: author})
const removeBook = (title, author) => bookList.splice(bookList.indexOf({title: title, author: author}), 1)
const listAllBooks = () => {
  for(i = 0; i < bookList.length; i++)
      console.log(bookList[i]);
}
const bookList = [
  { title: "Don Quixote", author: "Miguel de Cervantes" },
  { title: "Ulysses", author: "James Joyce" },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { title: "Moby Dick", author: "Herman Melville" },
];
addNewEntry("a", "b");
console.log(bookList);
removeBook("a", "b");
console.log(bookList);
listAllBooks();

const negOrPos = (num) => num > 0 ? "positive" : "negative"
console.log(negOrPos(7));
console.log(negOrPos(-7));

const day = "Tuesday"

switch(day) {
  case "Monday":
    console.log("Mon");
    break;
  case "Tuesday":
    console.log("Tue");
    break;
  case "Wednesday":
    console.log("Wed");
    break;
  case "Thursday":
    console.log("Thu");
    break;
  case "Friday":
    console.log("Fri");
    break;
  case "Saturday":
    console.log("Sat");
    break;
  case "Sunday":
    console.log("Sun");
    break;
  default:
    console.log("Not a day of the week")
}

const sumUp = (num) => {
  sum = 0;
  for(i = 1; i < num+1; i++)
    sum += i;
  return sum;
}
console.log(sumUp(7));

const convertTemp = (celsius) => {
  f = celsius*9.0/5.0+32.0;
  m = f > 65 ? "Wear a t shirt" : "Wear a jacket";
  console.log(m);
}

convertTemp(20);
/* (4) Write a one-line arrow function that takes in a number and returns a string stating whether the
  number is positive or negative using a ternary operator (assume the number will never be zero) */

/* (5) Write a switch statement for a 'day' variable that prints out something based off of what day of
  the week it is
  i.e. if it's Monday, print "good luck" or wednesday print "hump day" or friday print "party" */

/* (6) Write an arrow function that takes in a number, and uses a for loop to return the sum of every
  number from 1 up to that number
  ex. sumUp(7) = 28 */

/* (7) Write an arrow function that converts the temperature from Celsius to Fahrenheit and then tells
  me what I should wear accordingly */

/* (8) Write a function that takes in an array and prints out the amount of truthy values in that array
  using .forEach() */
const numTruthy = (array) => {
  sum = 0;
  const isTruthy = (v) => {
    sum = v ? sum+1 : sum
  }

  array.forEach(isTruthy);
  return sum;
}
const exampleArray = ["Hello, world!", 8, null, false, "", "0", -22];
console.log(numTruthy(exampleArray));

const convertObj = (array) => {
  const createEntry = (obj) => {
    const n = obj["gpa"];
    let letter = "A";
    if (n > 3.0)
      letter = "A";
    else if (n > 2.0)
      letter = "B";
    else if (n > 1.0)
      letter = "C";
    else
      letter = "D";
    return {fullname: obj["firstName"] + " " + obj["lastName"], lettergrade: letter};
  }
  const newArr = array.map(createEntry);
  return newArr;
}
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
console.log(convertObj(attendance));

const solveFour = (num) => {
  let num2 = len
}
/* (10) Write a function that solves the "every number eventually equals 4" puzzle. The output should be
  an array of the path you took to make it equal four
  ex/ [11, 6, 3, 5, 4], [19, 8, 5, 4] or [252, 18, 8, 5, 4]
  For context: https://puzzling.stackexchange.com/questions/29137/every-number-eventually-equals-4 */
