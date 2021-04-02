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


const addBook = (title, author) => {
  const bookObject = {title, author};
  bookList.push(bookObject); // (1)
} 

addBook("Harry Potter", "JK Rowling");

const remove = (title) => {
  let x = "";
  for (i=0; i<bookList.length; i++){
    if (bookList[i].title === title){
      x = i;
    }
  }
  if (x > -1){
    bookList.splice(x, 1); // (2)
  }
}

remove("Ulysses");


const display = () =>{
  let ans = [];
  for (i=0; i<bookList.length; i++){
    ans.push(bookList[i].title);
  }
  return ans;
}// (3)

// correct output 
console.log(display().toString()); // lists out all the titles
console.log("\n");




/* (4) Write a one-line arrow function that takes in a number and returns a string stating whether the
  number is positive or negative using a ternary operator (assume the number will never be zero) */


const sign = (num) => num > 0 ? "positive" : "negative";

// correct output
console.log(sign(-5)); // negative
console.log(sign(6));  // positive
console.log("\n");


/* (5) Write a switch statement for a 'day' variable that prints out something based off of what day of
  the week it is
  i.e. if it's Monday, print "good luck" or wednesday print "hump day" or friday print "party" */
  
  
  
  const dayOfWeek = (day) => {
    switch (day){
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
    }
  }

  // correct output
  console.log(dayOfWeek("Monday")); // It's Monday
  console.log(dayOfWeek("Sunday")); // It's Sunday
  console.log("\n");


/* (6) Write an arrow function that takes in a number, and uses a for loop to return the sum of every
  number from 1 up to that number
  ex. sumUp(7) = 28 */


const sum = (num) => {
  let accum = 0;
  for (i=0; i<=num; i++){
    accum += i;
  }
  return accum;
}

// correct output
console.log(sum(7)); // 28
console.log("\n");


/* (7) Write an arrow function that converts the temperature from Celsius to Fahrenheit and then tells
  me what I should wear accordingly */
const weather = (celsius) => {
  let fahr = (celsius * 9 / 5) + 32;
  if (fahr > 70){
    return "It's over 70 fahrenheit. Wear something light";
  }
  else if (fahr < 70 && fahr > 50){
    return "It's between 50 and 70 fahrenheit. Wear moderate layers of clothing";
  }
  else {
    return "It's below 50 fahrenheit. Wear multiple layers!"
  }
}

// correct output
console.log(weather(50)); // Over 70
console.log(weather(0)); // Below 50
console.log("\n");


/* (8) Write a function that takes in an array and prints out the amount of truthy values in that array
  using .forEach() */

const exampleArray = ["Hello, world!", 8, null, false, "", "0", -22]; // 4 truthys
const exampleArray2 = [true, true, true, false]; // 3 truthys

const allTruthys = (arr) =>{
  let count = 0;
  arr.forEach(element => {
    if (element){
      count +=1;
    }
  })
  return count;
}

// correct output
console.log(allTruthys(exampleArray)); // 4
console.log(allTruthys(exampleArray2)); // 3
console.log("\n");




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

const nameGrade = (arr, arr2) => {
  arr.map(element => {
    let fullName = element.firstName + " " + element.lastName;
    if (element.gpa >= 3.2){
      averageGrade = 'A';
    }
    else if (element.gpa > 2.5){
      averageGrade = 'B';
    }
    else if (element.gpa > 1.5){
      averageGrade = 'C';
    }
    else{
      averageGrade = 'D';
    }
    console.log("here");
    arr2.push({fullName, averageGrade});
  })
  return arr2;
}

let arr2 = [];
arr2 = nameGrade(attendance, arr2);
console.table(arr2); // printed as table. accurate, but couldn't figure out how to print any other way
console.log("\n");





/* (10) Write a function that solves the "every number eventually equals 4" puzzle. The output should be
  an array of the path you took to make it equal four
  ex/ [11, 6, 3, 5, 4], [19, 8, 5, 4] or [252, 18, 8, 5, 4]
  For context: https://puzzling.stackexchange.com/questions/29137/every-number-eventually-equals-4 */
let ones = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
let teens = ["eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
let twos = ["ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
let threes = ["onehundred", "twohundred", "threehundred", "fourhundred", "fivehundred", "sixhundred", "sevenhundred", "eighthundred", "ninehundred"];



let equalFour = (num, ans) => {
  if (num < 10){
    let s = ones[num];
    if (s.length === 4){
      ans.push(num);
      ans.push(4);
      return ans; // base case; function is done
    }
    ans.push(num);
    return equalFour(ones[num].length, ans); // recrusively call the function with the length of the number you just had
  }

  else if (num < 20) {
    let s = teens[(num % 10) - 1];
    ans.push(num);
    return equalFour(s.length, ans);
  }

  else if (num < 100) {
    let s = twos[Math.floor(num / 10) - 1];
    let s2 = ""; // make s2 more global variable
    
    if (num % 10 === 0){ // if the ones place is a zero, then it is ten
      return equalFour(s.length, ans);
    }
    else{ // if ones place isnt a zero, add it's string
      s2 = ones[num];
      s = s + s2;
    }
    ans.push(num);
    return equalFour(s.length, ans);
  }

  else if (num < 1000) {
    let s = threes[Math.floor(num/100)-1];
    let s2 = "";
    let s3 = "";
    if (num % 100 === 0){ // no tens or ones place
      ans.push(num);
      return equalFour(s.length, ans); // correct
    }
    else if (num % 10 === 0){ // nothing in ones place
      s2 = twos[(num % 100)/10 - 1]; // correct
      ans.push(num);
      return equalFour(s.length + s2.length, ans); // correct
    }
    else if ((num%100) < 20 ){ // tens place is teens
      s2 = teens[(num % 10) - 1]; // correct
      ans.push(num);
      return equalFour(s.length + s2.length, ans); // correct
    }
    else{ // weird one's place value
      s2 = ones[num%10]; // ones place // correct
      s3 = twos[((Math.floor(num-(num%10)) % 100) / 10) - 1]; // correct
      ans.push(num);
      return equalFour(s.length + s2.length + s3.length, ans);
    }
  }
  else {
    return "Invalid input";
  }
}

// all below have correct output
let ans1 = [];
console.log(equalFour(252, ans1).toString()); // toString() let's us print an array

let ans2 = [];
console.log(equalFour(19, ans2).toString());

let ans3 = [];
console.log(equalFour(11, ans3).toString());