/* Do all of these using proper ES6 syntax

Using the following array of objects,
(1) Write an arrow function that adds a new entry to bookList
(2) Write an arrow function that removes a specific book from the bookList
(3) Write an arrow function that lists out all the books or all the authors in the book list */

const addBook = (book,bookList) => bookList.push(book);
const removeBook = (index,bookList) => bookList.splice(index, 1);
const listBooks = (bookList) => {
  for(let x=0;x<bookList.length;x++){
    console.log(bookList[x].title);
  }
};

const bookList = [
  { title: "Don Quixote", author: "Miguel de Cervantes" },
  { title: "Ulysses", author: "James Joyce" },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { title: "Moby Dick", author: "Herman Melville" },
];
var book1 = {title:"Harry Potter and the Sorcerer's Stone", author:"JK Rowling"};
addBook(book1, bookList);

listBooks(bookList);

/* (4) Write a one-line arrow function that takes in a number and returns a string stating whether the
  number is positive or negative using a ternary operator (assume the number will never be zero) */

/* (5) Write a switch statement for a 'day' variable that prints out something based off of what day of
  the week it is
  i.e. if it's Monday, print "good luck" or wednesday print "hump day" or friday print "party" */

/* (6) Write an arrow function that takes in a number, and uses a for loop to return the sum of every
  number from 1 up to that number
  ex. sumUp(7) = 28 */

/* (7) Write an arrow function that converts the temperature from Celsius to Fahrenheit and then tells
  me what I should wear accordingly */

/* (8) Write a function that takes in an array and prints out the amount of truthy values in that array
  using .forEach() */

const posOrNeg = a => {
  const result = a>0 ? "positive" : "negative";
};

const day = 'Monday';

switch(day){
  case 'Monday':
    console.log('good luck');
    break;
  case 'Tuesday':
    console.log('keep going');
    break;
  case 'Wednesday':
    console.log('hump day');
    break;
  case 'Thursday':
    console.log('almost there');
    break;
  case 'Friday':
    console.log('party');
    break;
  case 'Saturday':
    console.log('woohoooooooo');
    break;
  case 'Sunday':
    console.log('oooooooooo oh no its Monday tomorrow');
    break;
  default:
    console.log('This is not a day');
  
}

const sumUp = x =>{
  let sum = 0;
  for(let y=0;y<=x;y++){
    sum=sum+y;
  }
  return sum;
};
const b = sumUp(7);
console.log(b); 

const convertAndAdvice = (x) =>{
  x = (x*(9/5))+32
  const y = x>50 ? "You don't need a jacket. The temperature is "+x+" degrees F." : "You need a jacket. The temperature is "+x+" degrees F.";
  return y;
};

const test = convertAndAdvice(0);
console.log(test);
const exampleArray = ["Hello, world!", 8, null, false, "", "0", -22];

const numTruthy = (a) =>{
  let sum = 0;
  const countTruthy = (b) =>{
    if(b){
      sum=sum+1;
      
    }
  };
  a.forEach(countTruthy);
  return sum;
};
console.log(numTruthy(exampleArray));



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

const changeFields = (a) =>{
  const gpaToGrade = (x) =>{
    if(x>=3.7)
      return "A";
    else if(x>=2.7)
      return "B";
    else if(x>=1.7)
      return "C";
    else if(x>=1.0)
      return "D";
    else 
      return "F";
  };

  let newArray = a.map((index)=>({fullName: attendance[index].firstName+attendance[index].lastName, 
    averageGrade:gpaToGrade(thisArg.gpa)}));
};
changeFields(attendance);
console.log(attendance);



/* (10) Write a function that solves the "every number eventually equals 4" puzzle. The output should be
  an array of the path you took to make it equal four
  ex/ [11, 6, 3, 5, 4], [19, 8, 5, 4] or [252, 18, 8, 5, 4]
  For context: https://puzzling.stackexchange.com/questions/29137/every-number-eventually-equals-4 */
