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

// 1. addBook
let addBook = (title, author) => bookList.push({title: title, author: author});
// 2. removeBook
let removeBook = (title) => bookList.splice(bookList.findIndex(el => el.title == title), 1);
// 3. listBooks
let listBooks = () => bookList.forEach(el => console.log("Title: ",el.title," Author: ",el.author));

/* (4) Write a one-line arrow function that takes in a number and returns a string stating whether the
  number is positive or negative using a ternary operator (assume the number will never be zero) */
let sign = num => num>=0 ? "positive" : "negative";

/* (5) Write a switch statement for a 'day' variable that prints out something based off of what day of
  the week it is
  i.e. if it's Monday, print "good luck" or wednesday print "hump day" or friday print "party" */
let dayMessage = day => {
  switch(day){
    case "Monday":
      return "Good luck!";
    case "Tuesday":
      return "Monday's over!";
    case "Wednesday":
      return "Humpday!";
    case "Thursday":
      return "Almost there!";
    case "Friday":
      return "Happy Friday!";
    case "Saturday":
      return "Freedom!";
    case "Sunday":
      return "Here come's monday...";
    default:
      return "Not a day... (or no caps)";
  }
}
/* (6) Write an arrow function that takes in a number, and uses a for loop to return the sum of every
  number from 1 up to that number
  ex. sumUp(7) = 28 */
let sum = num => {
  let total = 0;
  for(let i=0; i<=num; i++){
    total+=i;
  }
  return total;
}

/* (7) Write an arrow function that converts the temperature from Celsius to Fahrenheit and then tells
  me what I should wear accordingly */
let converted = cels => {
  let far = (cels * (9.0/5.0)) + 32.0;
  return("Temp: "+far+". Wear a "+(far<=32 ? "coat!" : far<=60 ? "jacket!" : "t-shirt!"));
}

/* (8) Write a function that takes in an array and prints out the amount of truthy values in that array
  using .forEach() */
let truthy = arr => {
  let amt = 0;
  arr.forEach(el => amt+= el ? 1 : 0);
  return amt;
}

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

let convertAttendance = arr => arr.map(el => {
  let grade = el.gpa < 1.0 ? "F" :
    el.gpa < 1.3 ? "D" :
    el.gpa < 1.7 ? "D+" :
    el.gpa < 2.0 ? "C-" :
    el.gpa < 2.3 ? "C" :
    el.gpa < 2.7 ? "C+" :
    el.gpa < 3.0 ? "B-" :
    el.gpa < 3.3 ? "B" :
    el.gpa < 3.7 ? "A-" :
    el.gpa < 4.0 ? "A" :
    "A+";
  return {fullName: (el.lastName + ", " + el.firstName), averageGrade: grade};
});

/* (10) Write a function that solves the "every number eventually equals 4" puzzle. The output should be
  an array of the path you took to make it equal four
  ex/ [11, 6, 3, 5, 4], [19, 8, 5, 4] or [252, 18, 8, 5, 4]
  For context: https://puzzling.stackexchange.com/questions/29137/every-number-eventually-equals-4 */

  let equalsFour = (num) => {
    if(num > 1000 || num < 0) {
      return "Sorry, not counting that high!";
    }
    if(num == 4) {
      return [4];
    }
    const digits = ["zero","one","two","three","four","five","six","seven","eight","nine"];
    const teens = ["ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
    const tens = ["zero","ten","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
    
    let res = 0;
    if(num>99) {
      let curDig = Math.floor(num / 100);
      res+=digits[curDig].length;
      res+="hundred".length;
    }
    if(num>19) {
      let curDig = Math.floor(num / 10);
      res+=tens[curDig].length;
      curDig = num % 10;
      res+=digits[curDig].length;
    }
    else if(num>9) {
      let curDig = Math.floor(num / 10);
      res+=teens[curDig].length;
    }
    else {
      res+=digits[num].length;
    }

    let arr = [num];
    return arr.concat(equalsFour(res));
  }

  console.log(equalsFour(74));