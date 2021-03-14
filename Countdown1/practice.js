//Ryan Grayson
/* Do all of these using proper ES6 syntax

Using the following array of objects,
(1) Write an arrow function that adds a new entry to bookList
(2) Write an arrow function that removes a specific book from the bookList
(3) Write an arrow function that lists out all the books or all the authors in the book list */
const addEntry = (e) => bookList.push(e);

const removeEntry = (titleToRemove) => {
  for (let i = 0; i < bookList.length; i++){
    if (bookList[i].title === titleToRemove)
        bookList.splice(i, 1); 
  }
  };

const ls = () => {
  bookList.forEach((book) => console.log(book.title + ", "))
};

const bookList = [
  { title: "Don Quixote", author: "Miguel de Cervantes" },
  { title: "Ulysses", author: "James Joyce" },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { title: "Moby Dick", author: "Herman Melville" },
];

/* (4) Write a one-line arrow function that takes in a number and returns a string stating whether the
  number is positive or negative using a ternary operator (assume the number will never be zero) */
const posneg = (i) => {
  return i < 0 ? "negative" : "positive";
};

console.log(posneg(1));

/* (5) Write a switch statement for a 'day' variable that prints out something based off of what day of
  the week it is
  i.e. if it's Monday, print "good luck" or wednesday print "hump day" or friday print "party" */
const today = (day) => {
  switch (day) {
  case 'Monday':
    console.log('good luck');
    break;
  case 'Wednesday':
    console.log('hump day');
    break;
  case 'Friday':
    console.log('party');
    break;
  default:
    console.log('nice');
}
};

/* (6) Write an arrow function that takes in a number, and uses a for loop to return the sum of every
  number from 1 up to that number
  ex. sumUp(7) = 28 */
const sumUp = (n) => {
  let sum = 0;
  for(let i = 1; i <= n; i++){
     sum += i;
  }
  return sum;
};

console.log(sumUp(7));

/* (7) Write an arrow function that converts the temperature from Celsius to Fahrenheit and then tells
  me what I should wear accordingly */
const CtoF = (tempInC) => {
  let tempInF = tempinC * (9 / 5) + 32;
  if (tempInF < 50)
    console.log('wear a hoodie');
  else 
    console.log('wear short sleeves');
  return tempInF;
};

/* (8) Write a function that takes in an array and prints out the amount of truthy values in that array
  using .forEach() */
const truths = (array) => {
  let tr = 0;
  array.forEach((val) => {
    if(val) tr++;
  });
  console.log(tr);
};

const exampleArray = ["Hello, world!", 8, null, false, "", "0", -22];

truths(exampleArray);

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
const letterGrade = (g) =>{
  if (g >= 4)
  return 'A';
  else if (g >= 3)
  return 'B';
  else if (g >= 2)
  return 'C';
  else if (g >= 1)
  return 'D';
  else 
  return 'F';
};

const change = (array) => {
let array2 = [];
array.map((student) => {
  array2.push(
    {fullName: student.firstName + " " + student.lastName, averageGrade: letterGrade(student.gpa)})
})
return array2;
};

console.log(change(attendance));

/* (10) Write a function that solves the "every number eventually equals 4" puzzle. The output should be
  an array of the path you took to make it equal four
  ex/ [11, 6, 3, 5, 4], [19, 8, 5, 4] or [252, 18, 8, 5, 4]
  For context: https://puzzling.stackexchange.com/questions/29137/every-number-eventually-equals-4 */

const letters = (num) => {
  if (num === 0){
    return 0;
  }
  else if (num === 4 || num === 5 || num === 9){
    return 4;
  }
  else if (num === 6 || num === 10 || num === 1 || num === 2){
    return 3;
  }
  else if (num === 7 || num === 8 || num === 3){
    return 5;
  }
  else if (num === 11 || num === 12){
    return 6;
  }
  else if (num === 13 || num === 14 || num === 18 || num === 19){
    return 8;
  }
  else if (num === 15 || num === 16){
    return 7;
  }
  else if (num === 17){
    return 9;
  }
  else if (num === 20 || num === 30 || num === 40 || num === 80 || num === 90){
    return 6;
  }
  else if (num === 50 || num === 60){
    return 5;
  }
  else if (num === 70){
    return 7;
  }
  else {
    console.log("error");
    return -1;
  }
}

const four = (number) => {
  array = [];
  while (number !== 4) {
    array.push(number);
    if (number < 20){
      number = letters(number);
      continue;
    }
    else{
      if (number === 100){
        number = 10;
        continue;
      }
      else{
        let secondDig = number % 10;
        number -= secondDig;
        number = letters(number) + letters(secondDig);
        continue;
      }
    }
   }
  array.push(4);
  return array;
};

console.log(four(11));
console.log(four(19));
console.log(four(74));
