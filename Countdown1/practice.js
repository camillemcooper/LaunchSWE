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

const addEntry = (title, author) => {
  bookList.push({title, author});
}

const remEntry = (input) => {
  for(x=0; x<bookList.length; x++){
    if(bookList[x].title === input){
      bookList.splice(x, 1);
      break;
    }
  }
}

const listBooks = () => {
  bookList.forEach((x) => console.log(x.title));
}

/* (4) Write a one-line arrow function that takes in a number and returns a string stating whether the
  number is positive or negative using a ternary operator (assume the number will never be zero) */

const isPositive = (int) => {
  ret = "";
  int > 0 ? ret = int + " is positive." : ret = int + " is negative.";
  return ret;
}

/* (5) Write a switch statement for a 'day' variable that prints out something based off of what day of
  the week it is
  i.e. if it's Monday, print "good luck" or wednesday print "hump day" or friday print "party" */

day = "Monday";

switch(day){
  case "Sunday":
    console.log("1st day");
    break;
  case "Monday":
    console.log("good luck");
    break;
  case "Tuesday":
    console.log("3rd day");
    break;
  case "Wednesday":
    console.log("hump day");
    break;
  case "Thursday":
    console.log("5th day");
    break;
  case "Friday":
    console.log("party");
    break;
  case "Saturday":
    console.log("7th day");
    break;
  default:
    console.log("not a day of the week");
}

/* (6) Write an arrow function that takes in a number, and uses a for loop to return the sum of every
  number from 1 up to that number
  ex. sumUp(7) = 28 */

  const sumUp = int => {
    y = 0;
    for(x = 1; x <= int; x++){
      y += x;
    }
    return y;
  }

/* (7) Write an arrow function that converts the temperature from Celsius to Fahrenheit and then tells
  me what I should wear accordingly */

const wear = (c) => {
  f = (c * 1.8) + 32;
  if(f>70){
    console.log("You should wear shorts.");
  }
  else{
    console.log("You should wear pants.");
  }
}

/* (8) Write a function that takes in an array and prints out the amount of truthy values in that array
  using .forEach() */

const exampleArray = ["Hello, world!", 8, null, false, "", "0", -22];

const printTruthy = (array) => {
  y = 0;
  array.forEach((x) => {
    if (x) {
      y += 1;
    }
  })
  console.log(y);
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

const func = (arraylist) => {
  fullName = [arraylist.firstName, arraylist.lastName].join(" ");
  averageGrade = "";
  if(arraylist.gpa === 4.0){
    averageGrade = "A";
  }
  else if(arraylist.gpa >= 3 && arraylist.gpa < 4){
    averageGrade = "B";
  }
  else if(arraylist.gpa >= 2 && arraylist.gpa < 3){
    averageGrade = "C";
  }
  else if(arraylist.gpa >= 1 && arraylist.gpa < 2){
    averageGrade = "D";
  }
  else if(arraylist.gpa >= 0 && arraylist.gpa < 1){
    averageGrade = "F";
  }
  return {fullName, averageGrade};
}
const map = () => {
  return attendance.map(func);
}

/* (10) Write a function that solves the "every number eventually equals 4" puzzle. The output should be
  an array of the path you took to make it equal four
  ex/ [11, 6, 3, 5, 4], [19, 8, 5, 4] or [252, 18, 8, 5, 4]
  For context: https://puzzling.stackexchange.com/questions/29137/every-number-eventually-equals-4 */

const magicFour = (number) => {
  const ret = [];
  ret.push(number);
  while(ret[ret.length-1] != 4){
    number = ret[ret.length-1];
    const numToStr = [];
    if(number === 0){
      numToStr.push(0);
    }
    while (number != 0) {
      numToStr.push(number%10);
      number = Math.floor(number/10);
    }
    const digitLengths = [];
    for (x=0; x<numToStr.length; x++){
      if (numToStr[x] === 0){
        digitLengths.push(0);
      }
      if (numToStr[x] === 1 || numToStr[x] === 2 || numToStr[x] === 6){
        digitLengths.push(3);
      }
      else if (numToStr[x] === 3 || numToStr[x] === 7 || numToStr[x] === 8){
        digitLengths.push(5);
      }
      else if (numToStr[x] === 4 || numToStr[x] === 5 || numToStr[x] === 9){
        digitLengths.push(4);
      }
    }
    for (x=0; x<numToStr.length; x++){
      if(x-1%3 === 0){
        if(numToStr[x] === 1){ //number is in the teens
          if(numToStr[x-1] === 0){ //10
            digitLengths[x-1] = 0;
            digitLengths[x] = 3;
          }
          else if(numToStr[x-1] === 1 || numToStr[x-1] === 2){ //11 12
            digitLengths[x-1] = 0;
            digitLengths[x] = 6;
          }
          else if(numToStr[x-1] === 3 || numToStr[x-1] === 4 || numToStr[x-1] === 8 || numToStr[x-1] === 9){ //13 14 18 19
            digitLengths[x-1] = 0;
            digitLengths[x] = 8;
          }
          else if(numToStr[x-1] === 5 || numToStr[x-1] === 6){ //15 16
            digitLengths[x-1] = 0;
            digitLengths[x] = 7;
          }
          else if(numToStr[x-1] === 7){ //17
            digitLengths[x-1] = 0;
            digitLengths[x] = 9;
          }
        }
        else if(numToStr[x] === 2 || numToStr[x] === 3 || numToStr[x] === 4 || numToStr[x] === 8 || numToStr[x] === 9){ //number in 20s or 30s or 40s or 80s or 90s
          digitLengths[x] = 6;
        }
        else if(numToStr[x] === 5 || numToStr[x] === 6){ //number in 50s or 60s
          digitLengths[x] = 5;
        }
        else if(numToStr[x] === 7){ //number in 70s
          digitLengths[x] = 7;
        }
      }
      else if (x-2%3 === 0){
        if(numToStr[x] != 0){
          digitLengths[x] = digitLengths[x] + 7;
        }
      }
    }
    let dltotal = 0;
    for(x=0; x<digitLengths.length; x++){
      dltotal = dltotal + digitLengths[x];
    }
    if(numToStr.length === 1){
      if(numToStr[0] === 0){
        dltotal = 4;
      }
    }
    ret.push(dltotal);
    }
  return ret;
}
