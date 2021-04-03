/* Do all of these using proper ES6 syntax

Using the following array of objects,
*/

const bookList = [
  { title: "Don Quixote", author: "Miguel de Cervantes" },
  { title: "Ulysses", author: "James Joyce" },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { title: "Moby Dick", author: "Herman Melville" },
];
// (1) Write an arrow function that adds a new entry to bookList
const addBook = (title, author) => {
  const bookObject = {title, author}
  bookList.push(bookObject)
};

// (2) Write an arrow function that removes a specific book from the bookList
const removeBook = (title, author) => {
  let i = 999;
  const bookObject = {title, author}
  for (let index = 0; index < bookList.length; index++) {
    if (bookList[index].title === bookObject.title) {i = index}
  }
  bookList.splice(i, 1);
}

// (3) Write an arrow function that lists out all the books or all the authors in the book list */
const printBooks = () => {
  bookList.forEach((book) => console.log(book.title, "by", book.author));
};


/* (4) Write a one-line arrow function that takes in a number and returns a string stating whether the
  number is positive or negative using a ternary operator (assume the number will never be zero) */
const numberFunct = (num) => {return (num>=0) ? "Positive" : "Negative"};


/* (5) Write a switch statement for a 'day' variable that prints out something based off of what day of
  the week it is
  i.e. if it's Monday, print "good luck" or wednesday print "hump day" or friday print "party" */
let day = "";
switch(day) {
  case "monday":
    console.log("good luck");
    break;
  case "wednesday":
    console.log("hump day");
    break;
  case "friday":
    console.log("party");
    break;
  default:
    console.log("Choose a different day");
}


/* (6) Write an arrow function that takes in a number, and uses a for loop to return the sum of every
  number from 1 up to that number
  ex. sumUp(7) = 28 */
const sumUp = (num) => {
  let sum = 0;
  for (let n = 1; n <= num; n++) {
    sum+=n;
  }
  console.log(sum);
};
// sumUp(7);

/* (7) Write an arrow function that converts the temperature from Celsius to Fahrenheit and then tells
  me what I should wear accordingly */
const convert = (t) => {
  let temperature = t * (9/5) + 32;
  console.log(temperature);
  if (temperature>=70) {
    console.log("Wear shorts and a T-shirt.");

  }
  else if (temperature>=50) {
    console.log("Wear a hoodie.");

  }
  else if (temperature>=30) {
    console.log("Bundle up!");
  }
  else {
      console.log("Stay inside.");
  }
};

/* (8) Write a function that takes in an array and prints out the amount of truthy values in that array
  using .forEach() */
const exampleArray = ["Hello, world!", 8, null, false, "", "0", -22];
const truth = (arr) => {
  let count = 0;
  arr.forEach(element => (element ? count++ : count+=0))
  return count;
}
console.log(truth(exampleArray));

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

  var a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
  var b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
  
  function inWords (num) {
      if ((num = num.toString()).length > 9) return 'overflow';
      n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
      if (!n) return; var str = '';
      str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
      str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
      str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
      str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
      str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) : '';
      return str;
  }

const arr = [];

const everyNumEqualsFour = (input) => {
  arr.push(input);
  let letters = inWords(input).length;
  console.log(letters);
  // return (everyNumEqualsFour(output))
}
let test = 4;
// inWords(4);
// everyNumEqualsFour(4);