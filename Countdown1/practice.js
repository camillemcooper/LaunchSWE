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

const addBook = book => {bookList.push(book);}; //add new entry
const removeBook = book => {
  let x = 0;
  bookList.forEach(bookList.title == book? x = bookList.indexOf(bookList.title): x=0);
  bookList.splice(x, 1);
}; //remove entry
const printBooks = () => {bookList.forEach(book => {console.log(book.title);});}; //print all book titles

/* (4) Write a one-line arrow function that takes in a number and returns a string stating whether the
  number is positive or negative using a ternary operator (assume the number will never be zero) */
const sign = x => {let s = ""; x<0?  s = "negative": s = "positive"; return sign;};
/* (5) Write a switch statement for a 'day' variable that prints out something based off of what day of
  the week it is
  i.e. if it's Monday, print "good luck" or wednesday print "hump day" or friday print "party" */
const day = "Saturday";
switch(day) {
  case "Sunday":
    console.log("sad");
    break;
  case "Monday":
    console.log("sleepy");
    break;
  case "Tuesday":
    console.log("work");
    break;
  case "Wednesday":
    console.log("1/2");
    break;
  case "Thursday":
    console.log("friday eve");
    break;
  case "Friday":
    console.log("yay");
    break;
  case "Saturday":
    console.log("sleep in");
    break;
  default:
    console.log("idk");
}
/* (6) Write an arrow function that takes in a number, and uses a for loop to return the sum of every
  number from 1 up to that number
  ex. sumUp(7) = 28 */
const sumUp = x => {
  let sum = 0; 
  let n = x;
  while(n > 0) {
    n--;
    sum+=n;
  }
  return sum;
}
/* (7) Write an arrow function that converts the temperature from Celsius to Fahrenheit and then tells
  me what I should wear accordingly */
const conversion = temp => {
  let fahrenheit = 1.8*temp + 32;
  let outfit = "";
  fahrenheit < 50? outfit="layer up": outfit="shorts and a tee";
  return outfit;
}
/* (8) Write a function that takes in an array and prints out the amount of truthy values in that array
  using .forEach() */

const exampleArray = ["Hello, world!", 8, null, false, "", "0", -22];
const trueOrFalse = arrayName => {
  let countTrue = 0;
  let countFalse = 0;
  arrayName.forEach(thing => (thing?countTrue++:countFalse++));
  console.log(countTrue);
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
const nameGrade = x => {
  let grade = "";
  if(x.gpa==4.0){
    grade="A";
  } else if (x.gpa > 3.0) {
    grade="B";
  } else if (x.gpa > 2.0) {
    grade="C";
  } else if (x.gpa > 1.0) {
    grade="D";
  } else {
    grade="F";
  };
  return {fullname: [x.firstName, x.lastName].join(" "), averageGrade: grade};
}
const grade = attendance.map(nameGrade);
/* (10) Write a function that solves the "every number eventually equals 4" puzzle. The output should be
  an array of the path you took to make it equal four
  ex/ [11, 6, 3, 5, 4], [19, 8, 5, 4] or [252, 18, 8, 5, 4]
  For context: https://puzzling.stackexchange.com/questions/29137/every-number-eventually-equals-4 */
const onesAndTens = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const prefixes = ['twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
const equals4 = number => {
  let numArray = [number]; 
  let n = number; 
  while (n != 4) {
    if (n < 20) {
      n = onesAndTens[n - 1].length;
      numArray.push(n);
    } else {
      n = prefixes[Math.floor(n/10) - 1].length + onesAndTens[n%10 - 1];
      numArray.push(n);
    }
  }
  return numArray;
};