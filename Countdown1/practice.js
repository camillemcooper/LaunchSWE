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

const newBook = (title,author) => bookList.push({title, author})
const removeBook = (removedTitle) => {
  let index = 0;
  for (let i = 0; i < bookList.length; i++) {
    if (bookList[i].title === removedTitle) {
      index = i;
    }
  }
  bookList.splice(index,1);
}
bookList.forEach((element) => {
  return element.title;
})

/* (4) Write a one-line arrow function that takes in a number and returns a string stating whether the
  number is positive or negative using a ternary operator (assume the number will never be zero) */

  const num = (number) => (number < 0)  ? "Negative" : "Positive";

/* (5) Write a switch statement for a 'day' variable that prints out something based off of what day of
  the week it is
  i.e. if it's Monday, print "good luck" or wednesday print "hump day" or friday print "party" */

  const weekDay = (dayOfWeek) => {
    switch(dayOfWeek) {
    case "Monday":
      return "Good luck on Monday";
    case "Tuesday":
      return "Good luck on Tuesday";
    case "Wednesday":
      return "Good luck on Wednesday";
    case "Thursday":
      return "Good luck on Thursday";
    case "Friday":
      return "Good luck on Friday";
    case "Saturday":
      return "Good luck on Saturday";
    default:
      return "Good luck on Sunday";
    }
  };

/* (6) Write an arrow function that takes in a number, and uses a for loop to return the sum of every
  number from 1 up to that number
  ex. sumUp(7) = 28 */

  const numbers = (yourNumber) => {
    let sum = 0;
    for(let i = 1; i <= yourNumber; i++) {
      sum += i;
    }
    return sum;
  }

/* (7) Write an arrow function that converts the temperature from Celsius to Fahrenheit and then tells
  me what I should wear accordingly */

  const temperature = (temp) => {
    let newTemp = ((9/5) * temp) + 32;
    if (newTemp <= 32) {
      return `The temperature is ${newTemp} and you should wear something really warm`;
    }
    else if (newTemp > 32 && newTemp <= 50) {
      return `The temperature is ${newTemp} and you should wear something kinda warm`;
    }
    else if (newTemp > 50 && newTemp <= 70) {
      return `The temperature is ${newTemp} and you should wear something not too warm`;
    }
    else {
      return `The temperature is ${newTemp} and you shouldn't wear anything warm`;
    }
  };


/* (8) Write a function that takes in an array and prints out the amount of truthy values in that array
  using .forEach() */

  var sum = 0;
  exampleArray.forEach((element) => {
    if (element) {
      sum += 1;
    }
  })


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

let arr = [];
attendance.map(x => {
  if (x.gpa === 4.0) {
    arr.push({fullname: x.firstName + " " + x.lastName,grade: "A"});
  }
  if (x.gpa === 3.7) {
    arr.push({fullname: x.firstName + " " + x.lastName,grade: "A-"});
  }
  if (x.gpa === 3.3) {
    arr.push({fullname: x.firstName + " " + x.lastName,grade: "B+"});
  }
  if (x.gpa === 3.0) {
    arr.push({fullname: x.firstName + " " + x.lastName,grade: "B"});
  }
  if (x.gpa === 2.7) {
    arr.push({fullname: x.firstName + " " + x.lastName,grade: "B-"});
  }
  if (x.gpa === 2.3) {
    arr.push({fullname: x.firstName + " " + x.lastName,grade: "C+"});
  }
  if (x.gpa === 2.0) {
    arr.push({fullname: x.firstName + " " + x.lastName,grade: "C"});
  }
  if (x.gpa === 1.7) {
    arr.push({fullname: x.firstName + " " + x.lastName,grade: "C-"});
  }
  if (x.gpa < 1.7) {
    arr.push({fullname: x.firstName + " " + x.lastName,grade: "D"});
  }
  return arr
});

/* (10) Write a function that solves the "every number eventually equals 4" puzzle. The output should be
  an array of the path you took to make it equal four
  ex/ [11, 6, 3, 5, 4], [19, 8, 5, 4] or [252, 18, 8, 5, 4]
  For context: https://puzzling.stackexchange.com/questions/29137/every-number-eventually-equals-4 */

