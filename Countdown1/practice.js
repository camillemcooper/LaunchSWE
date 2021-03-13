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
const addEntry = (titleName, authorName) => bookList.push({title: titleName, author: authorName});
addEntry("Test Title", "Test Author");
console.log(bookList);


//2
const removeEntry = (titleName) => {
  for(let i = 0; i < bookList.length; i++){
    if(bookList[i].title == titleName){
      bookList.splice(i, 1);
    }
  }
}
removeEntry("Test Title")
console.log(bookList);


//3
const printAll = () => {
  bookList.forEach((obj) => console.log(obj.title));
}
printAll();


/* (4) Write a one-line arrow function that takes in a number and returns a string stating whether the
  number is positive or negative using a ternary operator (assume the number will never be zero) */

const posNeg = (num) => num > 0?"positive":"negative";
console.log(posNeg(-1));
console.log(posNeg(1));


/* (5) Write a switch statement for a 'day' variable that prints out something based off of what day of
  the week it is
  i.e. if it's Monday, print "good luck" or wednesday print "hump day" or friday print "party" */

day = "Monday"
switch(day){
  case 'Sunday':
    console.log('Cram HW Day');
    break;
  case 'Monday':
    console.log('Ew Start of the Week');
    break;
  case 'Tuesday':
    console.log('Idk its Tuesday');
    break;
  case 'Wednesday':
    console.log('Its Wednesday My Dudes');
    break;
  case 'Thursday':
    console.log('Almost Friday!');
    break;
  case 'Friday':
    console.log('TGIF');
    break;
  case 'Saturday':
    console.log('Saturdays are for the girls (and boys)');
    break;
}


/* (6) Write an arrow function that takes in a number, and uses a for loop to return the sum of every
  number from 1 up to that number
  ex. sumUp(7) = 28 */

const sumUp = (num) => {
  let sum = 0;
  for(let i = 1; i <= num; i++){
    sum += i;
  }
  return sum;
}
console.log(sumUp(7));


/* (7) Write an arrow function that converts the temperature from Celsius to Fahrenheit and then tells
  me what I should wear accordingly */

const celToFaren = (temp) =>{
  faren = temp*9/5+32;
  console.log(faren);
  switch(true){
    case faren < 45:
      return 'bundle up';
    case faren < 60:
      return 'long sleeve/light jacket';
    case faren < 75:
      return 'short sleeves';
    default:
      return 'really hot!';
  }
}
console.log(celToFaren(10));


/* (8) Write a function that takes in an array and prints out the amount of truthy values in that array
  using .forEach() */

const exampleArray = ["Hello, world!", 8, null, false, "", "0", -22];
let truthys = 0;
exampleArray.forEach((val) => {
  if(val){
    truthys += 1;
  }
});
console.log(truthys);


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

let newAttendance = attendance.map(obj => {
  let newobj = {};
  newobj['name'] = obj.firstName + " " + obj.lastName;
  let grade = obj.gpa;
  let letter = ""
  switch (true){
    case grade > 3.7:
      letter = 'A';
      break;
    case grade > 3.3:
      letter = 'A-';
      break;
    case grade > 3.0:
      letter = 'B+';
      break
    case grade > 2.7:
      letter = 'B';
      break;
    case grade > 2.3:
      letter = 'B-';
      break;
    case grade > 2.0:
      letter = 'C+';
      break;
    case grade > 1.7:
      letter = 'C';
      break;
    case grade > 1.3:
      letter = 'C-';
    default:
      letter = 'D';
  }
  newobj['grade'] = letter;
  return newobj;
})
console.log(newAttendance);


/* (10) Write a function that solves the "every number eventually equals 4" puzzle. The output should be
  an array of the path you took to make it equal four
  ex/ [11, 6, 3, 5, 4], [19, 8, 5, 4] or [252, 18, 8, 5, 4]
  For context: https://puzzling.stackexchange.com/questions/29137/every-number-eventually-equals-4 */

const four = (num) => {
  const tens = {0: '', 2: 'twenty', 3: 'thirty', 4: 'fourty', 5: 'fifty', 6: 'sixty', 7: 'seventy', 8: 'eighty', 9: 'ninety'};
  const ones = {0: '', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine'};
  const teens = {10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen'};
  let steps = [num];
  let str = "";
  while (num != 4){
    if(Math.trunc(num/10) != 1){
      str = "" + tens[Math.trunc(num/10)] + ones[num%10];
    }
    else{
      str = teens[num];
    }
    num = str.length;
    steps.push(num)
  }
  return steps;
}
console.log(four(19));
