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

const add = (bookList, book) => bookList.push(book);
const remove = (bookList, idx) => bookList.splice(idx, 1);
const books = (bookList) => bookList.forEach((book) => console.log(book.title));

/* (4) Write a one-line arrow function that takes in a number and returns a string stating whether the
  number is positive or negative using a ternary operator (assume the number will never be zero) */

const sign = (int) => (int > 0 ? "positive" : "negative");

/* (5) Write a switch statement for a 'day' variable that prints out something based off of what day of
  the week it is
  i.e. if it's Monday, print "good luck" or wednesday print "hump day" or friday print "party" */

let day = "Thursday";
switch (day) {
  case "Sunday":
    console.log("The weekend is over");
    break;
  case "Monday":
    console.log("Good luck.");
    break;
  case "Tuesday":
    console.log("Taco Tuesday");
    break;
  case "Wednesday":
    console.log("Wahoo Wednesday");
    break;
  case "Thursday":
    console.log("Almost Friday");
    break;
  case "Friday":
    console.log("Actually Friday");
    break;
  case "Saturday":
    console.log("Shabbat shalom");
    break;
  default:
    console.log("Please enter a day")
};

/* (6) Write an arrow function that takes in a number, and uses a for loop to return the sum of every
  number from 1 up to that number
  ex. sumUp(7) = 28 */

  const sum = (int) => {
    let sum = 0;
    for (let i = 1; i <= int; i++){
      sum += i;
    }
    return sum;
  }

/* (7) Write an arrow function that converts the temperature from Celsius to Fahrenheit and then tells
  me what I should wear accordingly */

  const tempConverter = (temp) => {
    const fahrenheit = temp * 1.8 + 32;
    console.log(`The temperture in fahrenheit is ${fahrenheit} degrees.`)
    switch(true) {
      case (fahrenheit < 32):
        console.log("Brr, it's freezing. Wear a coat.");
        break;
      case (fahrenheit < 60):
        console.log("It's a bit chilly, wear a sweater");
        break;
      default:
        console.log("It's nice outside, wear shorts and a t-shirt.");
    }
  }

/* (8) Write a function that takes in an array and prints out the amount of truthy values in that array
  using .forEach() */

const exampleArray = ["Hello, world!", 8, null, false, "", "0", -22];

const truthy = (arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++){
    if(arr[i]){
      count ++;
    }
  }
  console.log(count)
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

const letterGrade = (gpa) => {
  switch(true){
    case (gpa > 3.5):
      return "A";
    case (gpa > 2.5):
      return "B";
    case (gpa > 1.5):
      return "C";
    case (gpa > 1):
      return "D";
    default:
      return "F";
  }
}

const summary = (roster) => {
  return roster.map(student => {
    return {fullName: `${student.firstName} ${student.lastName}`, averageGrade: letterGrade(student.gpa)}
  });
}

/* (10) Write a function that solves the "every number eventually equals 4" puzzle. The output should be
  an array of the path you took to make it equal four
  ex/ [11, 6, 3, 5, 4], [19, 8, 5, 4] or [252, 18, 8, 5, 4]
  For context: https://puzzling.stackexchange.com/questions/29137/every-number-eventually-equals-4 */

// I only did the first ten natural numbers.
numbers = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten"
}

const puzzle = (nat) =>{
  let arr = [nat]
  while (arr[arr.length-1] != 4){
    const temp = numbers[arr[arr.length-1]].length;
    arr.push(temp);
  }
  return arr;
}
