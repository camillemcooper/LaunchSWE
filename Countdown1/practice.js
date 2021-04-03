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

let addBook = (newTitle, newAuthor) => bookList.push(book ={title: newTitle, author: newAuthor})
addBook("Life","Zach")
console.log(bookList)
let removeBook = (Title, Author) => bookList.filter(book => book.title != Title)
let printList = bookList.forEach(book => console.log(book))
/* (4) Write a one-line arrow function that takes in a number and returns a string stating whether the
  number is positive or negative using a ternary operator (assume the number will never be zero) */
  const posOrNeg = (input) => input > 0 ? "positive" : "negative";
  
  /* (5) Write a switch statement for a 'day' variable that prints out something based off of what day of
  the week it is
  i.e. if it's Monday, print "good luck" or wednesday print "hump day" or friday print "party" */
  switch(day){
    case "Monday":
      console.log("Work sucks");
      break;
    case "Tuesday":
      console.log("worst day");
      break;
    case "Wednesday":
      console.log("Hump Day");
      break;
    case "Thursday":
      console.log("close");
      break;
    case "Friday":
      console.log("funday");
      break;
    case "Saturday":
      console.log(":)");
      break;
    case "Sudnay":
      console.log("Last Day of Weekend");
      break;
  }
/* (6) Write an arrow function that takes in a number, and uses a for loop to return the sum of every
  number from 1 up to that number
  ex. sumUp(7) = 28 */
  let sumUp = (num) => {
    let sum = 0;
    for(i = 0; i <= num; i++){
      sum += i;
    }
    return sum
  }
/* (7) Write an arrow function that converts the temperature from Celsius to Fahrenheit and then tells
  me what I should wear accordingly */
  let CtoF = (temp) => {
    (temp*(9/5)) + 32;
    if(temp > 50){
      console.log("Wear a jacket");
    }
    else{
      console.log("Enjoy the weather");
    }
  } ;
/* (8) Write a function that takes in an array and prints out the amount of truthy values in that array
  using .forEach() */

const exampleArray = ["Hello, world!", 8, null, false, "", "0", -22];

function isTruth (arr){
  arr.forEach(element => truthy(element));
  console.log(truth);
  }
  function truthy (item){
    let truth = 0;
    if(item){
      truth++;
    }
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
let gradesList = attenndannce.map(gpa => gradeAverage(gpa))

function gradeAverage(num){
  switch(num){
    case 0<=num<2:
      return "D";
    case 2<=num<3:
      return "C";
    case 3<=num< 4:
      return "B";
    case num ==4:
      return "A";
  }

}
/* (10) Write a function that solves the "every number eventually equals 4" puzzle. The output should be
  an array of the path you took to make it equal four
  ex/ [11, 6, 3, 5, 4], [19, 8, 5, 4] or [252, 18, 8, 5, 4]
  For context: https://puzzling.stackexchange.com/questions/29137/every-number-eventually-equals-4 */
