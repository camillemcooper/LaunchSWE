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

const addBook = (list, entry) => {
  list.push(entry);
}

const removeBook = (list, index) => {
  list = list.splice(i, 1);
}

const listBooksOrAuthors = (list, books) => {
  if(books) {
    for(let i = 0; i < list.length; i++) {
      console.log(list[i].title);
    }
  }
  else {
    for(let i = 0; i < list.length; i++) {
      console.log(list[i].author);
    }
  }
}

/* (4) Write a one-line arrow function that takes in a number and returns a string stating whether the
  number is positive or negative using a ternary operator (assume the number will never be zero) */

  const posOrNeg = (num) => num > 0 ? true : false;

/* (5) Write a switch statement for a 'day' variable that prints out something based off of what day of
  the week it is
  i.e. if it's Monday, print "good luck" or wednesday print "hump day" or friday print "party" */

  switch(day.toLowerCase()) {
    case "monday":
      console.log("good luck");
      break;
    case "wednesday":
      console.log("hump day");
      break
    case "friday":
      console.log("party");
  }

/* (6) Write an arrow function that takes in a number, and uses a for loop to return the sum of every
  number from 1 up to that number
  ex. sumUp(7) = 28 */

  const sumUp = num => {
    let result = 0;
    for(let i = 1; i < num; i++) {
      result += i;
    }
    return result;
  }

/* (7) Write an arrow function that converts the temperature from Celsius to Fahrenheit and then tells
  me what I should wear accordingly */

  const convertCtoF = cels => {
    const fahr = cels * 9 / 5 + 32;
    console.log(fahr < 50 ? "Wear a hoodie" : "Wear a T shirt");
  }

/* (8) Write a function that takes in an array and prints out the amount of truthy values in that array
  using .forEach() */

  const exampleArray = ["Hello, world!", 8, null, false, "", "0", -22];

  const truthyCount = arr => {
    let result = 0;
    arr.forEach((val) => {
      if(val) result++;
    });
    return result;
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

const nameAndGPA = list => {
  list.map(obj => {
    return {
      fullName:`${obj.firstName} ${obj.lastName}`, 
      averageGrade: obj.gpa > 3 ? 'A' : obj.gpa > 2 ? 'B' : obj.gpa > 1 ? 'C' : obj.gpa > 0 ? 'D' : 'F'
    }
  });
}

/* (10) Write a function that solves the "every number eventually equals 4" puzzle. The output should be
  an array of the path you took to make it equal four
  ex/ [11, 6, 3, 5, 4], [19, 8, 5, 4] or [252, 18, 8, 5, 4]
  For context: https://puzzling.stackexchange.com/questions/29137/every-number-eventually-equals-4 */

//I found this online, I don't even know if its possible to do this without some backbreaking effort without using a premade function
//References: https://gist.github.com/ForbesLindesay/5467742
function humanize(num){
  var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
              'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
              'seventeen', 'eighteen', 'nineteen'];
  var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty',
              'ninety'];

  var numString = num.toString();

  if (num < 0) throw new Error('Negative numbers are not supported.');

  if (num === 0) return 'zero';

  //the case of 1 - 20
  if (num < 20) {
    return ones[num];
  }

  if (numString.length === 2) {
    return tens[numString[0]] + ' ' + ones[numString[1]];
  }

  //100 and more
  if (numString.length == 3) {
    if (numString[1] === '0' && numString[2] === '0')
      return ones[numString[0]] + ' hundred';
    else
      return ones[numString[0]] + ' hundred and ' + convert(+(numString[1] + numString[2]));
  }

  if (numString.length === 4) {
    var end = +(numString[1] + numString[2] + numString[3]);
    if (end === 0) return ones[numString[0]] + ' thousand';
    if (end < 100) return ones[numString[0]] + ' thousand and ' + convert(end);
    return ones[numString[0]] + ' thousand ' + convert(end);
  }
}

const fourPuzzle = num => {
  let cur = num;
  let arr = [num];
  while(humanize(cur).length != 4) {
    cur = hunanize(cur).length;
    arr.push(cur);
  }
  return arr;
}