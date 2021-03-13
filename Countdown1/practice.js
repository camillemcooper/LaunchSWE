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

const addBook = (bookList, book) => {
  bookList.push(book);
  return bookList;
}

console.log(addBook(bookList, { title: 'A book', author: 'An Author' }));

const removeBook = (bookList, book) => {
  for (var i = 0; i < bookList.length; i++) {
    if (bookList[i].title === book.title) {
      bookList.splice(i, 1);
    }
  }
  return bookList
}

console.log(removeBook(bookList, { title: 'A book', author: 'An Author' }));

const listBooks = (bookList) => {
  bookList.forEach(book => {
    console.log(book.title);
  });
}

listBooks(bookList);
console.log();

/* (4) Write a one-line arrow function that takes in a number and returns a string stating whether the
  number is positive or negative using a ternary operator (assume the number will never be zero) */
const signage = (num) => { if (num > 0) { return "positive" } else { return "negative" } }
console.log("signage");
console.log(signage(-2));
console.log(signage(2));
console.log();

/* (5) Write a switch statement for a 'day' variable that prints out something based off of what day of
  the week it is
  i.e. if it's Monday, print "good luck" or wednesday print "hump day" or friday print "party" */
const dayMessage = (day) => {
  switch (day) {
    case "Monday":
      return "It's Monday";
    case "Tuesday":
      return "It's Tuesday";

    case "Wednesday":
      return "It's Wednesday";

    case "Thursday":
      return "It's Thursday";

    case "Friday":
      return "It's Friday";

    case "Saturday":
      return "It's Saturday";

    case "Sunday":
      return "It's Sunday";

    default:
      return "default";

  }
}

console.log("day message");
console.log(dayMessage("Monday"));
console.log(dayMessage("Thursday"));
console.log(dayMessage("")); console.log();

/* (6) Write an arrow function that takes in a number, and uses a for loop to return the sum of every
  number from 1 up to that number
  ex. sumUp(7) = 28 */
const sumTo = (num) => {
  let sum = 0
  for (var i = 0; i < num + 1; i++) {
    sum += i;
  }
  return sum;
}

console.log("sum to");
console.log(sumTo(7));
console.log();

/* (7) Write an arrow function that converts the temperature from Celsius to Fahrenheit and then tells
  me what I should wear accordingly */
const whatToWear = (tempC) => {
  tempF = tempC * (9 / 5) + 32;
  if (tempF < 30) {
    return "Wear some winter clothes"
  }
  else if (tempF > 30 && tempF < 60) {
    return "A sweater will do"
  }
  else if (tempF > 50 && tempF < 70) {
    return "Something light"
  }
  else {
    return "Short sleeves and shorts"
  }
}

console.log("what to wear");
console.log(whatToWear(20));
console.log(whatToWear(0));
console.log(whatToWear(30));
console.log();

/* (8) Write a function that takes in an array and prints out the amount of truthy values in that array
  using .forEach() */

const exampleArray = ["Hello, world!", 8, null, false, "", "0", -22];

const truthy = (exampleArray) => {
  let numTruthy = 0
  exampleArray.forEach(element => {
    if (element) {
      numTruthy++;
    }
  });
  return numTruthy;
}

console.log("truthy");
console.log(truthy(exampleArray));
console.log();

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

const studentGrades = (attendance) => {
  let students = []
  attendance.map((student) => {
    const name = student.firstName + " " + student.lastName;
    const gpa = student.gpa
    let letterGrade = ""
    if (gpa <= 1) {
      letterGrade = "D"
    }
    else if (gpa > 1 && gpa <= 2) {
      letterGrade = "C"
    }
    else if (gpa > 2 && gpa <= 3) {
      letterGrade = "B"
    }
    else {
      letterGrade = "A"
    }
    students.push({ fullName: name, grade: letterGrade });
  });
  return students;
}

console.log("student grades");
console.log(studentGrades(attendance));
console.log();



/* (10) Write a function that solves the "every number eventually equals 4" puzzle. The output should be
  an array of the path you took to make it equal four
  ex/ [11, 6, 3, 5, 4], [19, 8, 5, 4] or [252, 18, 8, 5, 4]
  For context: https://puzzling.stackexchange.com/questions/29137/every-number-eventually-equals-4 */

const ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const tens = ['', '', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
const hundred = 'hundred'

const numToWord = (num) => {
  let numword = ""
  const quotient = Math.floor(num / 10)
  if(quotient === 10){
    numword = hundred;
  }
  else if(quotient >= 2){
    numword = tens[quotient] + ones[num % 10];
  }
  else if(quotient === 1){
    numword = teens[num % 10];
  }
  else{
    numword = ones[num];
  }
  return numword;
}


const goesToFour = (num, path) =>{
  let numword = numToWord(num);
  while(numword != "four"){
    numword = numToWord(num);
    path.push(num);
    num = numword.length;
  }
  return path;
}

console.log("goes to 4");
console.log(goesToFour(11, [], ""));
console.log(goesToFour(19, [], ""));
console.log();
