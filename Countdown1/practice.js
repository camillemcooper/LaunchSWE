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

const newEntry = (listOfBooks, newElement) => listOfBooks.push(newElement); // problem 1
const removeEntry = (listOfBooks, elementIndex) => listOfBooks.splice(elementIndex, 1); // problem 2
const printAll = (listOfBooks) => listOfBooks.forEach((obj) => console.log(obj.title)); // problem 3


/* (4) Write a one-line arrow function that takes in a number and returns a string stating whether the
  number is positive or negative using a ternary operator (assume the number will never be zero) */

const posNeg = (num) => let result = num > 0 ? "positive" : "negative"; // problem 4

/* (5) Write a switch statement for a 'day' variable that prints out something based off of what day of
  the week it is
  i.e. if it's Monday, print "good luck" or wednesday print "hump day" or friday print "party" */

const getDay = (day) => {
  switch (day) {
    case "Monday":
      console.log("good luck");
      
    case "Tuesday":
      console.log("Taco Tuesday!");
      
    case "Wednesday":
      console.log("hump day");
      
    case "Thursday":
      console.log("Almost there!");
      
    case "Friday":
      console.log("party!!!");
      
    case "Saturday":
      console.log("day off");
      
    case "Sunday":
      console.log("New week!");
  }
}; // problem 5

/* (6) Write an arrow function that takes in a number, and uses a for loop to return the sum of every
  number from 1 up to that number
  ex. sumUp(7) = 28 */
const summation = (num) => {
  let result = 0;
  for (x = 1; x <= num; x++){
    result = result + x;
  }
};

/* (7) Write an arrow function that converts the temperature from Celsius to Fahrenheit and then tells
  me what I should wear accordingly */
const temperature = (celsius) => {
  const fahrenheit = (celsius * 1.8) + 32;
  if (fahrenheit < 32){
    console.log("Wear thick layers! Brrr!");
  }
  
  else if (fahrenheit < 50){
    console.log("Wear a sweater!");
  }
  
  else if (fahrenheit < 60) {
    console.log("Wear a longsleeved shirt.");
  }
  
  else if (fahrenheit < 90) {
    console.log("Wear a t-shirt.");
  }
  
  else if (fahrenheit > 90) {
    console.log("It's too hot!");
  }
}; // problem 7

/* (8) Write a function that takes in an array and prints out the amount of truthy values in that array
  using .forEach() */

const exampleArray = ["Hello, world!", 8, null, false, "", "0", -22];

const truthy = (exArray) => {
  exArray.forEach((item) => let result = item ? result + 1 : result));
}; // problem 8

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

attendance.map((person) => (
  <fullName key = {person.lastName} value = {person.firstname + " " + person.lastname}>
    {person.firstname + " " + person.lastname}
  </fullName>
  
  <averageGrade key = {person.lastName} value = {person.gpa}>
    if(person.gpa === 4.0){
      {"A"}};
    else if (person.gpa >= 3.7){
      {"A-"}};
    else if (person.gpa >= 3.3){
      {"B+"}};
    else if (person.gpa >= 3.0{
      {"B"}};
    else if (person.gpa >= 2.7){
      {"B-"}};
    else if (person.gpa >= 2.3){
      {"C+"}};
    else if (person.gpa >= 2.0){
      {"C"}};
    else if (person.gpa >= 1.7){
      {"C-"}};
    else if (person.gpa >= 1.3){
      {"D+"}};
    else if (person.gpa >= 1.0){
      {"D"}};
    else {
      {"F"}};
  
}
  </averageGrade>
  ))}

/* (10) Write a function that solves the "every number eventually equals 4" puzzle. The output should be
  an array of the path you took to make it equal four
  ex/ [11, 6, 3, 5, 4], [19, 8, 5, 4] or [252, 18, 8, 5, 4]
  For context: https://puzzling.stackexchange.com/questions/29137/every-number-eventually-equals-4 */
  
// Needed a number-to-words converter, so found this here: https://www.thoughtco.com/how-to-convert-numbers-to-words-with-javascript-4072535
// Convert numbers to words
// copyright 25th July 2006, by Stephen Chapman http://javascript.about.com
// permission to use this Javascript on your web page is granted
// provided that all of the code (including this copyright notice) is
// used exactly as shown (you can change the numbering system if you wish)

// American Numbering System
var th = ['','thousand','million', 'billion','trillion'];
// uncomment this line for English Number System
// var th = ['','thousand','million', 'milliard','billion'];

var dg = ['zero','one','two','three','four',
'five','six','seven','eight','nine']; var tn =
['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen',
'seventeen','eighteen','nineteen']; var tw = ['twenty','thirty','forty','fifty',
'sixty','seventy','eighty','ninety']; function toWords(s){s = s.toString(); s =
s.replace(/[\, ]/g,''); if (s != parseFloat(s)) return 'not a number'; var x =
s.indexOf('.'); if (x == -1) x = s.length; if (x > 15) return 'too big'; var n =
s.split(''); var str = ''; var sk = 0; for (var i=0; i < x; i++) {if
((x-i)%3==2) {if (n[i] == '1') {str += tn[Number(n[i+1])] + ' '; i++; sk=1;}
else if (n[i]!=0) {str += tw[n[i]-2] + ' ';sk=1;}} else if (n[i]!=0) {str +=
dg[n[i]] +' '; if ((x-i)%3==0) str += 'hundred ';sk=1;} if ((x-i)%3==1) {if (sk)
str += th[(x-i-1)/3] + ' ';sk=0;}} if (x != s.length) {var y = s.length; str +=
'point '; for (var i=x+1; istr.replace(/\s+/g,' ');}
  
  const eqFour = (num) => {
    let result = [];
    while (num != 4){
      let words = toWords(num);
      num = words.length;
      result.push(num);
    }
  }
