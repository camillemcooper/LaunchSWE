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

// (1) Add new entry to bookList
addBook = (title, author) => { 
  const item =  {
    title: title,
    author: author
  }
  bookList.push(item)
}

// (2) Remove book from bookList
removeBook = (index) => {bookList.splice(index, 1)}

// (3) List out books or authors in bookList
displayBooks = (type) => {
  for (i = 0; i<bookList.length; i++) {
    console.log(bookList[i][type]);
  }
}

// Testing
removeBook(0);
addBook("The Perks of Being a Wallflower", "Stephen Chbosky");
displayBooks('title');
displayBooks('author');

/* (4) Write a one-line arrow function that takes in a number and returns a string stating whether the
  number is positive or negative using a ternary operator (assume the number will never be zero) */

  let posNeg = (number) => {let result = number > 0 ? "The number is positive." : "The number is negative."; return result;}

  // Testing
  console.log(posNeg(3));
  console.log(posNeg(-5));

/* (5) Write a switch statement for a 'day' variable that prints out something based off of what day of
  the week it is
  i.e. if it's Monday, print "good luck" or wednesday print "hump day" or friday print "party" */

  let day = "Monday";
  // Testing
  day = "Monday"
  day = "Wednesday"
  day = "na"

  switch (day) {
    case "Monday":
      console.log("Good luck");
      break;
    case "Tuesday":
      console.log("Keep pushing");
      break;
    case "Wednesday":
      console.log("Hump day");
      break;
    case "Thursday":
      console.log("Almost there");
      break;
    case "Friday":
      console.log("Party");
      break;
    case "Saturday":
      console.log("Woohoo");
      break;
    case "Sunday":
      console.log("Get some work done");
      break;
    default:
      console.log("What day is it?");
  }

  
/* (6) Write an arrow function that takes in a number, and uses a for loop to return the sum of every
  number from 1 up to that number
  ex. sumUp(7) = 28 */

  sumUp = (number) => {let sum = 0; for (i=1;i<=number;i++){sum += i;} return sum;}
  //Testing
  console.log(sumUp(7));
  console.log(sumUp(3));

/* (7) Write an arrow function that converts the temperature from Celsius to Fahrenheit and then tells
  me what I should wear accordingly */
  celToFahr = (temperature) => {let fahr = temperature*(9/5) + 32; let statement = fahr > 50 ? "Wear some sunblock!" : "Grab your winter coat!"; return statement;}

  //Testing
  console.log(celToFahr(30));
  console.log(celToFahr(0));

/* (8) Write a function that takes in an array and prints out the amount of truthy values in that array
  using .forEach() */

const exampleArray = ["Hello, world!", 8, null, false, "", "0", -22];
function numTruthy(array) {
  let sum = 0;
  array.forEach((value) => {
      if (value) { sum += 1; }
    })
  return sum;
}

const exampleArray2 = ["h", "a", "p", "p", "y"];
const exampleArray3 = [null, null, false, "Happy", false]

console.log(numTruthy(exampleArray));
console.log(numTruthy(exampleArray2));
console.log(numTruthy(exampleArray3));

/*
function numTruthy(array) {
  array.forEach((value) => {let result === value})
}*/

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


  const newArray = attendance.map((name) => {
    let fullName = name.firstName + " " + name.lastName;
    let averageGrade = "";
    if (name.gpa > 3.3) {averageGrade = "A";}
    else if (name.gpa > 2.3) {averageGrade = "B";}
    else if (name.gpa > 1.3) {averageGrade = "C";}
    else if (name.gpa > 0) {averageGrade = "D";}
    else {averageGrade = "F";}
    return {fullName, averageGrade};
  })
  
  console.log(newArray);


/* (10) Write a function that solves the "every number eventually equals 4" puzzle. The output should be
  an array of the path you took to make it equal four
  ex/ [11, 6, 3, 5, 4], [19, 8, 5, 4] or [252, 18, 8, 5, 4]
  For context: https://puzzling.stackexchange.com/questions/29137/every-number-eventually-equals-4 */

  function everyNumEquals4(number) {
    const ones = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const tens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]
    const greaterTens = ["ignore", "ignore", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]

    let path = []
    let length = 0;
    if (number === 100) {
      path.push(number);
    }
    else if (number > 19) {
      const word = number.toString();
      greaterTens[parseInt(word[0])]
    }
  }