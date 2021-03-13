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
//1
const push = (list) => bookList.push({title: "Fahrenheit 451", author: "Ray Bradbury"});
//2
const remove = (list) => bookList.splice(0,1);
//3 ?
const listBooks = (list) => {
  for(let i=0; i<list.length(); i++){
  console.log(list.pop(i);
}

/* (4) Write a one-line arrow function that takes in a number and returns a string stating whether the
  number is positive or negative using a ternary operator (assume the number will never be zero) */
const posNeg = (int) => (int>0 ? "positive" : "negative");

/* (5) Write a switch statement for a 'day' variable that prints out something based off of what day of
  the week it is
  i.e. if it's Monday, print "good luck" or wednesday print "hump day" or friday print "party" */
const getDay = (day) => {
  switch(day){
    case monday:
      console.log("good luck");
      break;
    case wednesday:
      console.log("hump day");
      break;
    case friday:
      console.log("party");
  }
}

/* (6) Write an arrow function that takes in a number, and uses a for loop to return the sum of every
  number from 1 up to that number
  ex. sumUp(7) = 28 */
const sumUp = (num) => {
  var num = 0;
  for(let i=1; i<= num; i++){
    count += 1;
  }
  return count;
}

/* (7) Write an arrow function that converts the temperature from Celsius to Fahrenheit and then tells
  me what I should wear accordingly */
const temp = (c) => {
  let f = (c*(9/5)+32);
  if(f<32){
    console.log("brrr, wear winter clothes");
    return;
  }
  else if(f<65){
    console.log("It's a little chilly, wear layers");
    return;
  }
  else{
    console.log("It's warm, you can wear summer clothes);
    return;
    }
  }

/* (8) Write a function that takes in an array and prints out the amount of truthy values in that array
  using .forEach() */

const exampleArray = ["Hello, world!", 8, null, false, "", "0", -22];
const truthy = (arr) => {
      let sum = 0;
      
      arr.forEach((element) => {
        if(element) sum += 1;
      });
      
      return sum;
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
    
const newArray = attendance.map((student) => {
  const fullName = student.firstName + " " + student.lastName;
  let averageGrade;

  if (student.gpa >= 4) averageGrade = "A";
  else if (student.gpa >= 3.7) averageGrade = "B+";
  else if (student.gpa >= 3.3) averageGrade = "B";
  else if (student.gpa >= 3) averageGrade = "B-";
  else if (student.gpa >= 2.7) averageGrade = "C+";
  else if (student.gpa >= 2.3) averageGrade = "C";
  else if (student.gpa >= 2) averageGrade = "C-";
  else averageGrade = "Fail";

  return { fullName, averageGrade };
});

/* (10) Write a function that solves the "every number eventually equals 4" puzzle. The output should be
  an array of the path you took to make it equal four
  ex/ [11, 6, 3, 5, 4], [19, 8, 5, 4] or [252, 18, 8, 5, 4]
  For context: https://puzzling.stackexchange.com/questions/29137/every-number-eventually-equals-4 */
    
    // The number of letters in the word becomes the next number until it gets to 4 bc FOUR has 4 letters in it
    const magicFour = (num) => {
      let letters = 0;
    if(num = 1) {letters = 3;}
